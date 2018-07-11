const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route to retrieve all projects from database
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM projects;`;
    pool.query(queryText).then((result) => {
        console.log('ProjectRouter GET success', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in ProjectRouter GET route', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end GET route

// POST route to add new Projects to database
router.post('/', (req, res) => {

});

module.exports = router;