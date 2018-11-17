const express = require('express');
const routes = require('./api');

/* setup express app */
const app = express();

app.use(routes);


// Listen for request
const PORT = 4000;

app.listen(PORT,() => {
    console.log('Listen on Port ' + PORT);
});