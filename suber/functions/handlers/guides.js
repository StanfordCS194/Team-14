const {admin, db} = require('../util/admin');

exports.getAllGuides = (req, res) => {
    admin.firestore().collection('users')
        .orderBy('firstName')
        .get()
        .then((data) => {
            let guides = [];
            data.forEach((doc) => {
                guides.push({
                    userId: doc.data().userId,
                    firstName: doc.data().firstName,
                    lastName: doc.data().lastName,
                    imageUrl: doc.data().imageUrl,
                    handle: doc.data().handle,
                    email: doc.data().email,
                    language: doc.data().language,
                    major: doc.data().major,
                    completedTours: doc.data().completedTours,
                    netRating: doc.data().netRating,
                    note: doc.data().note
            });
        });
        return res.json(guides);
     })
     .catch((err) => {
         console.error(err);
         res.status(500).json({error: err.code});
     });
}
