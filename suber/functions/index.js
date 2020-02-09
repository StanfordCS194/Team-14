const functions = require('firebase-functions');
const express = require('express');
const app = express();

const FBAuth = require('./util/fbAuth');

const {getAllScreams, postOneScream} = require('./handlers/screams');
const {signup, login, uploadImage} = require('./handlers/users');



//Screams route
app.get('/screams', getAllScreams)
app.post('/screams', FBAuth, postOneScream);

//signup route
app.post('/signup', signup);
//login route
app.post('/login', login)
app.post('/user/image', uploadImage)


//functions
exports.api = functions.https.onRequest(app);
