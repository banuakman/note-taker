// LOAD DATA=====================================
const fs = require('fs');
const uuid = require('uuid');
const path = require('path');

var notes = JSON.parse (
  fs.readFileSync(path.join(__dirname, '../db/db.json'))
  );

// ROUTING
module.exports = (app) => {

  // API GET Requests
  app.get('/api/notes', (req, res) => res.json(notes));

  // API POST Requests
  app.post('/api/notes', (req, res) => {
     let newNote = req.body;
     newNote.id = uuid.v4();
     notes.push(newNote);
     fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
     res.json(notes)
   });

  // API DELETE Requests
  app.delete('/api/notes/:id', (req, res) => {
    notes = notes.filter(note => note.id != req.params.id);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
    res.json(notes)
});

};
