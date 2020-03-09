const functions = require('firebase-functions');
const express = require('express');
const app = express();

const FBAuth = require('./util/fbAuth');

const {signup, login, uploadImage, addUserDetails, getAuthenticatedUser} = require('./handlers/users');
const {getAllGuides} = require('./handlers/guides');

//signup route
app.post('/signup', signup);

//login route
app.post('/login', login);

//user route
app.get('/user', FBAuth, getAuthenticatedUser);
app.post('/user', FBAuth, addUserDetails);
app.post('/user/image', FBAuth, uploadImage);

//guides route
app.get('/guides', getAllGuides);

//functions
exports.api = functions.https.onRequest(app);