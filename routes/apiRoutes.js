const router = require('express').Router();
const path = require('path');
const NoteDetails = require('../db/function.js');


router.get('/notes', (req, res) => { //make sure it matches the index.js get - matches the get on index.js
    NoteDetails.getNotes()
        .then(notes => { //.then are promises 
            console.log(notes); // make sure you are getting info
            let parseNotes = JSON.parse(notes); //make sure you JSON.parse it so it can be seen
            res.json(parseNotes); // getting the notes from the getNotes function 
        });
    
});

router.post('/notes', (req, res) => {
    // need to access the new Functions that you exported from function.js
    NoteDetails.addNotes(req.body)
    .then(notes => { //notes is coming from db.json from the back end
        // pulling what was put in and put it to the front end (res- is front end)
        res.json(notes);
    });
   
});

module.exports = router;