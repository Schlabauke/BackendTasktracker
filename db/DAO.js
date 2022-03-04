const { ObjectId } = require('mongodb')
const { connect } =require('./connection')


async function getTask(){
    const db = await connect()
    const tasklist = await db.collection('Tasktracker')
    .find()
    .toArray()
    return tasklist
}

async function addTask(task){
    const db = await connect()
    const tasklist = await db.collection('Tasktracker')
    .insertOne(task)
    return tasklist
}
async function editTask(id){
    const db = await connect()
    const editTask = await db.collection('Tasktracker')
    .updateOne({_id: ObjectId(id)})
    return editTask
}

async function deleteTask(id){
    const db = await connect()
    const deleteTask = await db.collection('Tasktracker')
    .deleteOne({_id: ObjectId(id)})
    return deleteTask
}

module.exports= {
    getTask,
    addTask,
    editTask,
    deleteTask
}