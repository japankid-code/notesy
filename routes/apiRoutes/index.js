const router = require('express').Router();
const notesRoute = require('./notesRoute')

router.use(notesRoute);

module.exports = router;
