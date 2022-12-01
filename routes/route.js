import express from 'express';


import { addTodo, getAllTodos, toggleTodoDone, getOneTodo, deleteTodo } from '../controller/todo-controller.js';

const route = express.Router();


route.post('/api/todo', addTodo)
route.get('/api/todos', getAllTodos);
route.get('/api/todo/:id', getOneTodo);
route.post('/api/todo/:id/done', toggleTodoDone);
route.delete('/api/todo/:id/delete', deleteTodo);


export default route;