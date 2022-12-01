import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const todo = mongoose.model('todo', TodoSchema);

export default todo;