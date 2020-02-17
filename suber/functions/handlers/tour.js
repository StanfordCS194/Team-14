const {admin, db} = require('../util/admin');
const config = require('../util/config');
const firebase = require('firebase');

exports.getAllTours = (req, res) => {
    admin.firestore().collection('tours')
        .orderBy('startTime','desc')
        .get()
        .then((data) => {
            let tours = [];
            data.forEach((doc) => {
                tours.push({
                tourId: doc.id,
                status: doc.data().status,
                uid: doc.data().uid,
                touristName: doc.data().touristName,
                touristContact: doc.data().touristContact,
                startTime: doc.data().startTime,
                endTime: doc.data().endTime,
                startLoc: doc.data().startLoc,
                language: doc.data().language,
                partySize: doc.data().partySize,
                note: doc.data().note
            });
        });
        return res.json(tours);
     })
     .catch((err) => {
         console.error(err);
         res.status(500).json({error: err.code});
     });
}

exports.postNewTour = (req, res) => {
    const newTour = {
      status: 'pending',
      uid: req.user.uid,
      touristName: req.touristName,
      touristContact: req.touristContact,
      partySize: req.partySize,
      startTime: req.startTime,
      endTime: req.endTime,
      startLoc: req.startLoc,
      language: req.language,
      note: req.note
    };
  
    admin
    .firestore()
    .collection('ours')
    .add(newTour)
    .then((doc) => {
      res.json({message: `document ${doc.id} created successfully`});
    })
    .catch((err)=> {
      res.status(500).json({error: 'something went wrong'});
      console.error(err);
    });
  }

  exports.getTourForTourist = (req, res) => {
    admin.firestore().collection('tours')
        .orderBy('touristContact').equalTo(req.touristContact)
        .get()
        .then((data) => {
            let tours = [];
            data.forEach((doc) => {
                tours.push({
                tourId: doc.id,
                status: doc.data().status,
                uid: doc.data().uid,
                touristName: doc.data().touristName,
                touristContact: doc.data().touristContact,
                startTime: doc.data().startTime,
                endTime: doc.data().endTime,
                startLoc: doc.data().startLoc,
                language: doc.data().language,
                partySize: doc.data().partySize,
                note: doc.data().note,
            });
        });
        return res.json(tours);
     })
     .catch((err) => {
         console.error(err);
         res.status(500).json({error: err.code});
     });

  exports.getTourForGuide = (req, res) => {
    admin.firestore().collection('tours')
        .orderBy('uid').equalTo(req.uid)
        .orderBy('status').equalTo(req.status)
        .get()
        .then((data) => {
            let tours = [];
            data.forEach((doc) => {
                tours.push({
                tourId: doc.id,
                status: doc.data().status,
                uid: doc.data().uid,
                touristName: doc.data().touristName,
                touristContact: doc.data().touristContact,
                startTime: doc.data().startTime,
                endTime: doc.data().endTime,
                startLoc: doc.data().startLoc,
                language: doc.data().language,
                partySize: doc.data().partySize,
                note: doc.data().note,
            });
        });
        return res.json(tours);
     })
     .catch((err) => {
         console.error(err);
         res.status(500).json({error: err.code});
     });
  }