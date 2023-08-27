const getAllTasks = (req, res) => {
    res.send("get all Tasks .");
}

const createTask = (req, res) => {
    res.send("Create Tasks");
}

const getTask = (req, res) => {
    res.send("get single Tasks");
}

const updateTask = (req, res) => {
    res.send("Update Task");
}

const deleteTask = (req, res) => {
    res.send("Delete Task");
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}