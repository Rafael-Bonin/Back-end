const express = require('express');
const allBooksMdw = require('../middlewares/allBooksMdw');
const booksByIdMdw = require('../middlewares/booksByIdMdw');

const router = express.Router();

router.get('/books', allBooksMdw);
router.get('/books/:id', booksByIdMdw);
router.post('/books')

module.exports = router;