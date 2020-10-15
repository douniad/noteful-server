const express = require('express')
const { v4: uuid } = require('uuid')
const logger = require('./logger')
const router = express.Router()
const bodyParser = express.json()

router
.route('/notes')
.get((req, res) => {
    res.json()
})
.post(bodyParser, (req, res) => {
 const
})

router
.route('/notes/:id')
.get((req, res) => {
const 
})

.delete((req, res) => {


    res
    .status(204)
    .end();
})

module.exports = router