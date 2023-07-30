import express from "express";
import bodyParser from "body-parser";
import request from "request";
import https from "https";
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import dotenv from "dotenv";

dotenv.config({path: "secrets.env"});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/sign_up.html");
});

app.post("/failure", (req, res) => {
    res.redirect("/");
});

app.post("/", (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;

    const data = {
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fname,
                LNAME: lname
            }
        }]
    };

    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/"+process.env.ID;
    const options = {
        method: "POST",
        auth: "tejjus:"+process.env.KEY
    };

    const request = https.request(url, options, (response) => {

        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        }else{
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();
})

app.listen(3000, () => {
    console.log("server running on port 3000");
});