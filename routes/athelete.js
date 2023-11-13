const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const { getAtheletes, addAthelete} = require('../controllers/atheletes');
const { validateFields } = require("../middlewares/validate-fields");

router
.route('/')
.get(getAtheletes)
.post([
    check('name','Name is required').not().isEmpty(),
    check('age', 'Ages should be a number').isNumeric(),
    validateFields
],addAthelete)

  module.exports = router;