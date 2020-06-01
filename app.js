const express = require('express');
require('./src/db/mongoose');
const Task = require('./src/models/Tasks');
const admin = require('firebase-admin');
const Auth = require('./src/firebase/Auth');
const app = express();

var serviceAccount = require("./src/firebase/serviceaccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://stackhacktasks.firebaseio.com",
});

const port = process.env.PORT;

app.use(express.json());

app.post('/task',Auth,async (req,res) => {
    
    try {
        let task=new Task(req.body);
        if (!task.task)
            res.status(401).send({ status: "Please Enter a valid task" });
      await task.save();
      res.send({ status: "Task saved" });   
    }catch(e){
        console.log(e);
        res.status(500).send({status:e})
    }
})

app.get('/task', Auth, async (req, res) => {
    try {
        let sort = "desc";
        if (req.query.date) {
            sort = req.query.date;
            delete req.query.date;
        }
        let tasks = await Task.where(req.query).sort({ dueDate: sort });
        if (!tasks || !tasks.length)
            return res.status(404).send({ status: "No task found." });
        res.send({ tasks });
    } catch (e) {
        console.log(e);
        res.status(500).send({ e });
    }
});

app.get('/alltask', Auth, async (req, res) => {
    
    try {
        let tasks = await Task.getOnlyTask();
        if (!tasks.length)
            return res.status(404).send({ status: "No Tasks added yet" });
        res.send({ tasks });
    } catch (e) {
        console.log(e);
        res.status(e).send({ e });
    }
});

app.get('/task/:id', Auth, async (req, res) => {
    
    try {
        let task = await Task.findById(req.params.id);
        if (!task)
            return res.status(404).send({ status: "This task does not exists" });
        res.send({ task });
    } catch (e) {
        console.log(e);
        res.status(500).send({ e });
    }
})

app.get('*', (req, res) => {
    res.send("404 Page Does Not Exist");
});

app.listen(port, () => {
    console.log("server is up and running");
});