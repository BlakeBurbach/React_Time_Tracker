const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route to retrieve all tasks from database
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM task_entries;`;
    pool.query(queryText).then((result) => {
        console.log('TaskEntryRouter GET success', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in TaskEntriesRouter GET route', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end GET route

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;