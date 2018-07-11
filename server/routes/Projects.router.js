const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route to retrieve all projects from database
router.get('/', (req, res) => {
    const queryText = `SELECT projects.id as project_id,
                        projects.project_client as client,
                        projects.project_description as project_description,
                        projects.total_hours as total_time,
                        projects.total_pay as total_pay
                        FROM projects;`;
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