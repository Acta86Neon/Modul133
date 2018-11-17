/* Tutorial mit SQLite3 mit Node.js

 * http://www.sqlitetutorial.net/sqlite-nodejs/
*/
const sqlite3 = require('sqlite3').verbose();

/* starten der SQLite.Datenbank verbindung */
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});

/* beenden der SQLite.Datenbank verbindung */
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});




