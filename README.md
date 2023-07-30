# **Mailchimp Subscription Form**
This is a simple Node.js web application using Express.js to handle a subscription form that integrates with Mailchimp's API to add new subscribers to a mailing list. The application allows users to sign up by providing their first name, last name, and email address.

## **Table of Contents**
 - Prerequisites
 - Installation
 - Usage
 - Configuration

## **Prerequisites**
Before running this application, you need to have the following installed:

 - Node.js: https://nodejs.org/
 - npm (Node Package Manager): npm comes bundled with Node.js installation.

## **Installation**
 1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/mailchimp-subscription-form.git
cd mailchimp-subscription-form
```

 2. **Install the required dependencies using npm:**
```
npm install
```
## **Usage**
 
 1. Create a .env file in the root directory of the project and provide your Mailchimp API key and list ID in it. For example:
makefile
```
KEY=your_mailchimp_api_key
ID=your_mailchimp_list_id
```

2. Run the application:
```
npm start
```

 - Open your web browser and visit **http://localhost:3000/** to access the subscription form.

 - Fill out the form with your first name, last name, and email address, then click the "Subscribe" button to add yourself to the Mailchimp mailing list.

 - If the subscription is successful, you will be redirected to the success page. If there is an error, you will be redirected to the failure page.

## **Configuration**
The application uses a .env file to store sensitive information like the Mailchimp API key and list ID. Make sure you create a .env file in the root directory of the project with the following content:
```
KEY=your_mailchimp_api_key
ID=your_mailchimp_list_id
```
Replace **your_mailchimp_api_key** with your actual Mailchimp API key and **your_mailchimp_list_id** with the ID of the Mailchimp list you want to add subscribers to.
