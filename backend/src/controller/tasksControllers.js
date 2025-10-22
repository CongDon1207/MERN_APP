import express from 'express';
import Task from '../model/Task.js';

export const getAllTasks = async (req, res) => {
    try {
        const Tasks = await Task.find().sort({createAt: -1});
        res.status(200).json(Tasks);
    } catch (error) {
        console.error("Loi khi goi getAllTask", error);
        res.status(500).json({message: "Loi he thong" });
    }
}

export const addTask = async (req, res) => {
    try {
        const {title} = req.body;
        const task = new Task({title})
        
        const newTask = await task.save();
        res.status(200).json(newTask);

    } catch(error) {
        console.error("Loi ghi them Task", error);
        res.status(500).json({message: "Loi khi them task"});
    }
}

export const editTask = async (req, res) => {
    try {
        const {title, status, completeAt} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {title, status, completeAt},
            {new: true}
        )

        if(!updatedTask){
            return res.status(404).json({message: "Khong tim thay task"});
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Khong the update task", error);
        res.status(500).json({message: "Loi he thong"});
    }
}

export const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if(!deletedTask){
            return res.status(404).json({message: "Khong tim thay task"});
        }

        res.status(200).json({message: "Xoa du lieu thanh cong"});
    } catch(error){
        console.error("Khong the xoa task", error);
        res.status(500).json({message: "Loi he thong"});
    }
}