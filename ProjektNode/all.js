const sqlite3 = require('sqlite3').verbose();

/* starten der SQLite.Datenbank verbindung */
let db = new sqlite3.Database('./db/chinook.db');

let sql = `SELECT DINSTINCT Name name FROM playlists 
           ORDER BY name`

db.all(sql, [], (err, rows) => {
    if (err) {
        throw err;
    }
    rows.forEach((row) => {
        console.log(row.name);
    });
});

db.close();