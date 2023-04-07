# Multilingual-web-App
### Author : Bridget Izba
#### Node.js Express App

# First Step
#### Lets design the front end of our web app with any web3 Template of choice

```bash
[HTML/CSS/JS 'https://www.w3schools.com/howto/howto_website.asp']

 ### when satisfied with the front-end design implement design interactions  
   
```
# Second Step
#### Lets add some language functionalities using the node.js Internationalization (i18n) library
```bash
npm install express i18n body-parser --save

```
```bash
# Add javascript
const i18n = require('i18n');
i18n.configure({
  locales: ['en', 'fr'],
  directory: __dirname + '/locales',
  defaultLocale: 'en',
  queryParameter: 'lang'
});
```

#### Create translation files: Create a separate JSON file for each language you're supporting, with the translations for your UI. For example, you could create locales/en.json and locales/fr.json files.
```bash

json
// en.json
{
  "greeting": "Hello",
  "button": "Click me"
}

```
```bash
// fr.json
{
  "greeting": "Bonjour",
  "button": "Cliquez ici"
}

```
#### Set up routes and middleware: Set up routes for your web app and add the i18n middleware to handle language detection and translation.
```bash
javascript 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const i18n = require('i18n');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(i18n.init);

app.get('/', function(req, res) {
  res.render('index', {
    greeting: req.__('greeting'),
    button: req.__('button')
  });
});

```
#### In this example, we're using the __ function to translate the text based on the user's preferred language. The translated text is passed to the index view to render the UI.
Add language switching functionality: Create a language switcher in your UI that sends a request to the server to switch the language. You can set the language based on a query parameter in the URL.
```bash
html
<a href="/?lang=en">English</a>
<a href="/?lang=fr">Français</a>
```
#### When the user clicks on the language switcher, the lang parameter is set in the URL, which triggers the i18n middleware to detect and set the new language.

Test and localize: Test your app to make sure the translations are working correctly. You may also need to consider localization issues, such as date and time formatting, currency symbols, and other regional differences.

These are the basic steps to create a multilingual web app in Node.js using the i18n library. You can customize the i18n configuration and add more features to your web app as needed.


###### this example is differnt from original code
