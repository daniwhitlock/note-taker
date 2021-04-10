const util = require('util');
// const uuidv1 = require('uuid/v1'); //dynamically creates a unique id for you when you call-  uuid no longer works like this 
const shortid = require('shortid');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);

class NoteDetails {
    read() {
        return readFile('db/db.json', 'utf8');
    }
    write(note) {
        console.log(note);
        return writeFile('db/db.json', JSON.stringify(note));
       
    }

    getNotes() {
        return this.read();
    }

    addNotes(note) {
        // console.log(note);
        let title = note.title;
        let text = note.text;
        if (!title || !text) {
            return false;
        }
        let newNote = {
            id: shortid.generate(),
            title: title,
            text: text
        };
        return this.getNotes()
            .then(data => { //read the note, give it a name (data), then we are going to...
                // console.log(data);
                let results = JSON.parse(data);
                results.push(newNote); //push new note into data
                return results;

            })
            .then(noteResults => {
                // console.log(noteResults);
                               
                return this.write(noteResults); // write to the file
            })
            .then(() => newNote);
    }
};

module.exports = new NoteDetails;