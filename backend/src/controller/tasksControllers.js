import express from 'express';

export const getAllTasks = (req, res) => {
    res.status(200).json({message: "Lay nhiem vu thanh cong"});
};

export const addTask = (req, res) => {
    res.status(201).json({message: "Them nhiem vu thanh cong"});
}

export const editTask = (req, res) => {
    res.status(200).json({message: "Sua nhiem vu thanh cong"});
}

export const deleteTask = (req, res) => {
    res.status(200).json({message: "Xoa nhiem vu thanh cong"});  
}