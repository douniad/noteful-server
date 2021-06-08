const FoldersService = {
    insertFolder(db, newFolder) {
        return db
            .insert(newFolder)
            .into('noteful_folders')
            .returning('*')
            .then(([folder]) => folder)
    },
    getFolders(db) {
        return db
          .from('noteful_folders')
          .select()
    }
}


module.exports = FoldersService