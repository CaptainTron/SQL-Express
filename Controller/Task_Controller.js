const DBConfig = require("../SqlConnection/Sqlconnection")

const Task = DBConfig.Task

const CreateTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        let task = {
            title: title,
            description: description
        }
        const CreateData = await Task.create(task);
        res.status(200).send(CreateData);
    } catch (error) {
        res.status(500).send(error.message)
    }
}


const GetTask = async (req, res) => {
    const { id: TaskId } = req.query;
    let task;
    try {
        if (TaskId) {
            task = await Task.findOne({ where: { id: TaskId } })
        } else {
            task = await Task.findAll({
                // attributes: [
                //     'id',
                //     'title',
                //     'description'
                // ]
            })
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const UpdateA_Task = async (req, res) => {
    try {
        let TaskId = req.params.id
        const task_update = await Task.update(req.body, { where: { id: TaskId }, returning: true });
        res.status(200).send(task_update);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const DeleteTask = async (req, res) => {
    try {
        let TaskId = req.params.id
        const task = await Task.destroy({ where: { id: TaskId } })
        res.status(200).json({ message: 'Task has been Successfully Deleted!' });
    } catch (error) {
        res.status(500).json({ messag: error.message })
    }
}


module.exports = {
    CreateTask,
    GetTask,
    DeleteTask,
    UpdateA_Task
}