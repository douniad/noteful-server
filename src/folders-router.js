const express = require('express')
const { v4: uuid } = require('uuid')
const router = express.Router()
const bodyParser = express.json()
const FoldersService = require('./folders-service')

router
    .route('/')
    .get((req, res) => {
        FoldersService.getFolders(  req.app.get('db'))
            .then(folders => {
                res.json(folders)
            })
    })
    .post(bodyParser, (req, res) => {
        const name = req.body.name
        const newFolder = {name}
        FoldersService.insertFolder(
            req.app.get('db'),
            newFolder
        )
        .then(folder => {
            res.json(folder)
        })
    })

router
    .route('/:id')
    .get((req, res) => {
        const id = req.body.id
    })

    .delete((req, res) => {
        const id = req.body.id

        res
            .status(204)
            .end();
    })



module.exports = router