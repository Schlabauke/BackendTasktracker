const { ObjectId } = require('mongodb')
const { connect }= require('../db/connection')
const { getTask,addTask,editTask,deleteTask } =require('../db/DAO')

async function getTaskContr(req,res){
    const tasks = await getTask()
    return tasks
}

async function addTaskContr(req,res){
    const task = req.body
    const addtask = await addTask(task)
    .then((alltasks)=>{
        console.log(alltasks)
        return alltasks
    })
    .catch((err) =>{
        console.log('Error on addTaskContr',err)
    })
    console.log(req.body)
    res.redirect('/menuzwei')
}

async function deleteTaskContr(req,res){
    const id= req.body._id
    const delTask = await deleteTask(id)
    res.redirect('/menuzwei')
}

module.exports={
    getTaskContr,
    addTaskContr,
   deleteTaskContr,
}