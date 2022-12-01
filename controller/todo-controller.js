import Todo from '../model/Todo.js';

export const addTodo = async (request, response) => {
    var msec = new Date().getTime();
    try {
        const newTodo = await Todo.create({
            description: request.body.description,
            id: msec,
            createdAt: Date.now()
        })

        await newTodo.save();

        return response.status(200).json({id:newTodo.id});
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getAllTodos = async (request, response) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return response.status(200).json(todos);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getOneTodo = async (request, response) => {
    try {
        const todoRef = await Todo.findOne({id:request.params.id});

        const data = {
            id: todoRef.id,
            description: todoRef.description,
            status: todoRef.status
        }        

        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const toggleTodoDone = async (request, response) => {
    try {
        await Todo.findOneAndUpdate(
            { id: request.params.id },
            { status: "done" }
        )

        const todoRef = await Todo.findOne({id:request.params.id});

        return response.status(200).json(todoRef);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

export const deleteTodo = async (request, response) => {
    try {
        const todo = await Todo.deleteOne({id:request.params.id})

        return response.status(200).json(todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}