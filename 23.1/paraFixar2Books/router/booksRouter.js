const express = require('express');
const allBooksMdw = require('../middlewares/allBooksMdw');

const router = express.Router();

router.get('/books', allBooksMdw);

module.exports = router;