const express = require('express');
const getAllMdw = require('../middlewares/getAllMdw');
const createAuthorMdw = require('../middlewares/createAuthorMdw')

const router = express.Router();

router.get('/authors', getAllMdw);
router.post('/authors', createAuthorMdw);

module.exports = router;
