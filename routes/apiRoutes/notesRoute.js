const router = require('express').Router();
const { validateNote } = require('../../lib/notes');
const fs = require('fs');
const path = require('path');

const notes = require('../../db/db');

router.get('/notes', function(req, res) {
  res.json(notes);
})

router.post('/notes', function(req, res) {
  let request = req.body
  if (validateNote(request) === true) {
    notes.push(request);
    res.json(notes);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes))
  } else {
    res.send(`no note posted`)
  }
})

router.delete('/notes/:id', function(req, res) {
  let id = parseInt(req.params.id);
  const result = notes.splice(id, 1);
  fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes))
  res.json(result);
})


module.exports = router;
