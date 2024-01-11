const { CreateTask, GetTask, UpdateA_Task, DeleteTask } = require("../Controller/Task_Controller")

const router  = require("express").Router()
router.post('/createtask', CreateTask);
router.route('/gettask').get(GetTask)
router.patch('/updatetask/:id', UpdateA_Task);
router.delete('/deletetask/:id', DeleteTask);


module.exports = router;