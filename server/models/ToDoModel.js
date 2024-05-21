const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title:{
        type: String,
        required: true
    }, 
    dueDate: {
        type: Date, 
        required: true
    },
    hoursNeeded: {
        type: Number,
        required: false
    }
}, {timestamps: true})


module.exports = mongoose.model("Todo", TodoSchema);
