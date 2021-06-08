const NotesService = {
    insertNote(db, newNote) {
        return db
            .insert(newNote)
            .into('noteful_notes')
            .returning('*')
            .then(([note]) => note)
    },
    getNotes(db) {
        return db
          .from('noteful_notes')
          .select()
    },

    deleteNote(db, id) {
        return db
        .from('noteful_notes')
        .where({id})
        .del()
    }
}

module.exports = NotesService