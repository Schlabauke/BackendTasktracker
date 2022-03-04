const { getTaskContr, addTaskContr, deleteTaskContr } = require("../controller/taskcontroller")

const routes = (app) => {
    app.route("/menueins")
        .get((req, res) => {
            res.render("pages/index")
        })
    app.route('/menuzwei')
    .get((req,res)=> {
        getTaskContr()
        .then(tasks => {
       
        res.render('pages/menuzwei',{tasks})
 })
        
    })
    app.route('/addTask')
    .post(addTaskContr)
    app.route('/gettasks')
    .get(getTaskContr)
    app.route('/deletetask')
    .post(deleteTaskContr)

}

module.exports = { routes }