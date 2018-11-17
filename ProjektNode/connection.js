// const sqlite3 = require('sqlite3').verbose();
//
// /* starten der SQLite.Datenbank verbindung */
// let db = new sqlite3.Database('./db/chinook.db', sqlite3.OPEN_READWRITE, (err) => {
//     if (err) {
//         return console.log(err.message);
//     } else {
//         console.log('Verbunden mit der chinook.db');
//     }
// });
//
// db.serialize(() => {
//     db.each(`SELECT PlaylistID as id,
//                     Name as name
//              FROM playlist`, (err,row) => {
//         if (err) {
//             console.error(err.message);
//         } else {
//
//         }
//     })
// });
//
// /* beenden der SQLite.Datenbank verbindung */
// db.close((err) => {
//     if (err) {
//         console.log(err.message);
//     } else {
//         console.log('Verbindung zur chinok.db beendet');
//     }
// });