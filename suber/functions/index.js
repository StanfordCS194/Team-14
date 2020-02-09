const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp();

const express = require('express');
const app = express();

const firebase = require('firebase');
const config = {
  apiKey: "AIzaSyBdlWQlaZXt9SPV4-OrPrGtMnluWq39Gwk",
  authDomain: "cs194w-387e8.firebaseapp.com",
  databaseURL: "https://cs194w-387e8.firebaseio.com",
  projectId: "cs194w-387e8",
  storageBucket: "cs194w-387e8.appspot.com",
  messagingSenderId: "511649801620",
  appId: "1:511649801620:web:dfffc9d25318b5059d9b81",
  measurementId: "G-TEF8LEFQ2X"
};

firebase.initializeApp(config);

const db = admin.firestore();



app.get('/screams', (req, res) => {
  admin.firestore().collection('screams').orderBy('createdAt','desc').get()
   .then((data) => {
     let screams = [];
     data.forEach((doc) => {
      screams.push({
        screamId: doc.id,
        body: doc.data().body,
        userHandle: doc.data().userHandle,
        createdAt: doc.data().createdAt
      });
     });
     return res.json(screams);
   })
   .catch((err) => console.error(err));
})

const FBAuth = (req, res, next) => {
  let idToken;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else{
    console.error('No token found')
    return res.status(403).json({error: 'Unauthorized'});
  }
  admin.auth().verifyIdToken(idToken)
  .then(decodedToken => {
    req.user = decodedToken;
    console.log(decodedToken);
    return db.collection('users')
      .where('userId', '==', req.user.uid)
      .limit(1)
      .get();
  })
  .then(data => {
    req.user.handle = data.docs[0].data().handle;
    return next();
  })
  .catch(err => {
    console.error('Error while verifying token ', err);
    return res.status(403).json(err);
  })
}


app.post('/screams', FBAuth, (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.user.handle,
    createdAt: new Date().toISOString()
  };

  admin
  .firestore()
  .collection('screams')
  .add(newScream)
  .then((doc) => {
    res.json({message: `document ${doc.id} created successfully`});
  })
  .catch((err)=> {
    res.status(500).json({error: 'something went wrong'});
    console.error(err);
  });

});

const isEmpty = (string) => {
  if(string.trim() === '') return true;
  else return false;
}

const isEmail = (email) => {
  const regEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email.match(regEx)) return true;
  else return false;
}


//signup route
app.post('/signup', (req,res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };

  let errors = {};

  if(isEmpty(newUser.email)) {
    errors.email = 'Email must not be empty'
  } else if (!isEmail(newUser.email)) {
    errors.email  = 'Must be a valid email address'
  }

  if(isEmpty(newUser.password)) errors.password = "Password must not be empty";
  if(newUser.password !== newUser.confirmPassword) errors.confirmPassword = "Passwords must match";
  if(isEmpty(newUser.handle)) errors.handle = "Must not be empty";

  if(Object.keys(errors).length > 0) return res.status(400).json(errors)

  let token, userId;
  db.doc(`/users/${newUser.handle}`).get()
  .then(doc => {
    if(doc.exists){
      return res.status(400).json({handle: 'this handle is taken'});
    } else{
      return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    }
  })
  .then(data => {
    userId = data.user.uid;
    return data.user.getIdToken();
  })
  .then(idtoken => {
    token = idtoken;
    const userCredentials = {
      handle: newUser.handle,
      email: newUser.email,
      createdAt: new Date().toISOString(),
      userId
    };
    return db.doc(`/users/${newUser.handle}`).set(userCredentials)
    //return res.status(201).json({token});
  })
  .then(() => {
    return res.status(201).json({token});
  })
  .catch(err => {
    console.error(err);
    if(err.code === 'auth/email-already-in-use'){
      return res.status(400).json({email: 'Email is already taken'})
    } else{
      return res.status(500).json({error: err.code})
    }
    return res.status(500).json({error : err.code});
  })

  //TODO : validate data


});

app.post('/login', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  let errors = {};

  if(isEmpty(user.email)) errors.email = "Email must not be empty";
  if(isEmpty(user.password)) errors.password = "Password must not be empty";

  if(Object.keys(errors).length > 0) return res.status(400).json(errors);

  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(data => {
    return data.user.getIdToken();
  })
  .then(token => {
    return res.json({token});
  })
  .catch(err => {
    console.error(err);
    if(err.code === 'auth/wrong-password'){
      return res.status(403).json({general: 'wrong password1'})
    }
    else{
      return res.status(500).json({error: err.code});
    }
  })

})

//functions
exports.api = functions.https.onRequest(app);
