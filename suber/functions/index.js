const functions = require('firebase-functions');
const express = require('express');
const app = express();

const FBAuth = require('./util/fbAuth');

const {getAllScreams, postOneScream} = require('./handlers/screams');
const {signup, login, uploadImage, addUserDetails, getAuthenticatedUser} = require('./handlers/users');
const {getAllGuides} = require('./handlers/guides');



//Screams route
app.get('/screams', getAllScreams);
app.post('/screams', FBAuth, postOneScream);
//TODO : delete scream
//TODO : like scream
//TODO : unlike scream
//TODO : comment on scream


//signup route
app.post('/signup', signup);

//login route
app.post('/login', login);

app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

//Guides route
app.get('/guides', getAllGuides);


//functions
exports.api = functions.https.onRequest(app);