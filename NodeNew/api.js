const express = require('express');
const router = express.Router();

//get List of ninjas of Database
router.get('/api', function(res, req){
    res.send({type: "GET"});
    });

//add an new Ninja in Database
router.post('/ninjas', (res, req) => {
    res.send({type: 'POST'});
});

//update a ninja in the Database
router.put('/ninjas/:id', (res, req) =>{
    res.send({type: 'PUT'});
});

//delete a ninja from Database
router.delete('/ninjas:id', (res, req)=> {
    res.send({type: 'DELETE'});
});


module.exports = router;