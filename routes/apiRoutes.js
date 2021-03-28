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
    .then(notes => { // not returning what we need it to return in the function.js = then addNotes
        // console.log(notes); 
    });
    
    // Functions.getNotes(); //pass in data, do the callback/promise, res.json whatever the note is
});

module.exports = router;