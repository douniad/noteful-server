const express = require('express')
const { v4: uuid } = require('uuid')
const router = express.Router()
const bodyParser = express.json()
const NotesService = require('./notes-service')

router
    .route('/')
    .get((req, res) => {
        NotesService.getNotes(req.app.get('db'))
            .then(notes => {
                res.json(notes)
            })
    })
    .post(bodyParser, (req, res) => {
        const { name, content, folderId } = req.body
        const newNote = { name, content, folderId }
        NotesService.insertNote(
            req.app.get('db'),
            newNote
        )
            .then(note => {
                res.json(note)
            })
    })

router
    .route('/:id')
    .get((req, res) => {
        const id = req.params.id
    })

    .delete((req, res) => {
        const id = req.params.id

        NotesService.deleteNote(
            req.app.get('db'),
            id
        )
        .then(data => {
            res
            .status(204)
            .end();
        })

        
    })

module.exports = router