const mongoose = require("mongoose");
const validator = require("validator");

const Schema = new mongoose.Schema({
  task: {
    type: String,
    trim: true,
    required: true
  },
  dueDate: {
      type: Number,
      required: true
  },
  status: {
    type: String,
    lowercase:true,
    trim: true
  },
  label: {
    type: String,
    lowercase:true,
    trim: true
  },
  owner: {
    type: String,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Please enter a valid email")
        }
    }  
  }
});

Schema.statics.getOnlyTask = async () => {
  let allData = await Task.find();
  let tasks =allData.map((value) => {
    const task = value.toObject();
    delete task.dueDate;
    delete task.status;
    delete task.label;
    delete task.__v;
    delete task.owner;
    return task;
  });
  return tasks;
}

const Task = mongoose.model('Task', Schema);

module.exports = Task;