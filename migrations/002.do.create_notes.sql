CREATE TABLE noteful_notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL, 
    "folderId" INTEGER REFERENCES noteful_folders(id),
    content TEXT,
    date_created TIMESTAMP DEFAULT now() NOT NULL
);