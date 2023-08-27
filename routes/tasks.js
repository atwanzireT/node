const express = require("express");
const {News} = require("../models/tasks");
const {getAllTasks, createTask, deleteTask, getTask, updateTask} = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").delete(deleteTask).get(getTask).patch(updateTask)

module.exports = router;