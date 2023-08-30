const { Task } = require("../models/tasks");


const getAllTasks = async(req, res) => {
    // res.send("get all Tasks .");
    try {
        const task = await Task.find();
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task })
    }
    catch(err) {
        res.status(500).json({message:err})
    }
}

const getTask = (req, res) => {
    res.json({ id: req.params.id });
}

const updateTask = async (req, res) => {
    const taskId = req.params.id;
    try {
        const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, {new:true})
        if(!updatedTask){
            return res.status(404).json({"Message":"Task Not Found ."});
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({"message":error});
    }
}

const deleteTask = async(req, res) => {
    const taskId = res.params.id;
    try {
        const deletedTask = await Task.findByIdAndDelete(taskId);
        if(!deletedTask){
            return res.status()
        }
    } catch (error) {
        
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}