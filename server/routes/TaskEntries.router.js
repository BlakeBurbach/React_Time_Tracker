const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET route to retrieve all tasks from database
router.get('/', (req, res) => {
    const queryText = `SELECT task_entries.id,
                        task_entries.project_id as project_id,
                        task_entries.task_description as task_description,
                        task_entries.task_date as date,
                        (task_entries.end_time - task_entries.start_time) as total_hours,
                        projects.project_client as project_client FROM task_entries
                        JOIN projects ON task_entries.project_id = projects.id
                        GROUP BY project_id, project_client, task_entries.id, task_description, date, total_hours
                        ORDER BY task_entries.id DESC;`;
    pool.query(queryText).then((result) => {
        console.log('TaskEntryRouter GET success', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in TaskEntriesRouter GET route', error);
        res.sendStatus(500);
    }); // end pool.query
}); // end GET route

// POST route to send new task entry to database
router.post('/', (req, res) => {
    const TaskEntry = req.body;
    const queryText = `INSERT INTO task_entries (project_id, task_description, task_date, start_time, end_time)
                        VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [TaskEntry.project_id, TaskEntry.task_description, TaskEntry.date, TaskEntry.start_time, TaskEntry.end_time])
        .then((result) => {
            console.log('TaskEntryRouter POST success', result);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('ERROR in TaskEntriesRouter POST route', error);
            res.sendStatus(500);
        }); // end pool.query
}); // end POST route

module.exports = router;