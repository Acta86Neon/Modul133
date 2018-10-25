/* Tutorial mit SQLite3 mit Node.js

 * http://www.sqlitetutorial.net/sqlite-nodejs/
*/

const sqlite3 = require('sqlite3').verbose();

/* starten der SQLite.Datenbank */
let db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        return console.log(err.message);
    } else {
        console.log('Verbunden mit der SQLite.Database');
    }
});

/* beenden der SQLite.Datenbank */
db.close((err) => {
   if (err) {
       console.log(err.message);
   } else {
       console.log('Verbindung zur SQLite.Datenbank beendet');
   }
});



