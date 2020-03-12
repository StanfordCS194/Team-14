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
                userId: doc.data().userId,
                touristName: doc.data().touristName,
                touristContact: doc.data().touristContact,
                startDate: doc.data().startDate,
                startTime: doc.data().startTime,
                duration: doc.data().duration,
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
      userId: req.body.userId,
      touristName: req.body.touristName,
      touristContact: req.body.touristContact,
      partySize: req.body.partySize,
      startDate: req.body.startDate,
      startTime: req.body.startTime,
      duration: req.body.duration,
      startLoc: req.body.startLoc,
      language: req.body.language,
      note: req.body.note
    };

    db.collection('tours').add(newTour)
    .then((doc) => {
      return res.status(201).json({message: `document ${doc.id} created successfully`});
    })
    .catch((err)=> {
      return res.status(500).json({error: 'something went wrong'});
      console.error(err);
    });
  }

  exports.getTourForTourist = (req, res) => {
    admin.firestore().collection('tours')
        .orderBy('touristContact').equalTo(req.body.touristContact)
        .get()
        .then((data) => {
            let tours = [];
            data.forEach((doc) => {
                tours.push({
                tourId: doc.id,
                status: doc.data().status,
                userId: doc.data().userId,
                touristName: doc.data().touristName,
                touristContact: doc.data().touristContact,
                startDate: doc.data().startDate,
                startTime: doc.data().startTime,
                duration: doc.data().duration,
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

  exports.getTourForGuide = (req, res) => {
    admin.firestore().collection('tours')
        .orderBy('userId').equalTo(req.userId)
        .orderBy('status').equalTo(req.status)
        .orderBy('startTime','desc')
        .get()
        .then((data) => {
          let tours = [];
          data.forEach((doc) => {
              tours.push({
                tourId: doc.id,
                status: doc.data().status,
                userId: doc.data().userId,
                touristName: doc.data().touristName,
                touristContact: doc.data().touristContact,
                startDate: doc.data().startDate,
                startTime: doc.data().startTime,
                duration: doc.data().duration,
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