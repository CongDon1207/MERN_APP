import express from 'express';
import { addTask, deleteTask, editTask, getAllTasks } from '../controller/tasksControllers.js';

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", addTask);

router.put("/:id", editTask);

router.delete("/:id", deleteTask);

export default router;