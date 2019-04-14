const express = require('express');

const router = express.Router();
const controllers = require('../controller/books.controllers');

router.get('/', controllers.index);

router.get('/add', controllers.add);
router.post('/add', controllers.POSTadd);

module.exports = router;
