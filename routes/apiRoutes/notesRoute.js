const router = require('express').Router();
const { validateNote } = require('../../lib/notes')
const { notes } = require('../../db/db');

router.get('/notes', function(req, res) {
  let results = notes;
  res.json(results);
})

router.post('/notes', function(req, res) {
  let request = req.body
  if (validateNote(request) === true) {
    notes.push(request);
    res.json(notes);
  }
  res.send(`no note posted`)
})

router.delete('/notes/:id', function(req, res) {
  let id = parseInt(req.params.id) - 1;
  console.log(id);
  // return only the ones that don't match the id requested
  const result = notes.splice(id, 1);
  console.log(result)
  res.json(result);
})


module.exports = router;
