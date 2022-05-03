const express = require('express');
const getAllMdw = require('../middlewares/getAllMdw');

const router = express.Router();

router.get('/authors', getAllMdw);

module.exports = router;
