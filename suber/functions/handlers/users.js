const {db} = require('../util/admin');
const config = require('../util/config')
const firebase = require('firebase');
firebase.initializeApp(config)

exports.signup = (req,res) => {
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
  
  }