import { db } from "./firebase_sdk";
import { addNewTodo } from "./add_todos";
import { deleteTodo } from "./delete_todo";
import { updateCompleted, updateTitle } from "./update_todo";

export default {
    db,
    addNewTodo,
    deleteTodo,
    updateCompleted,
    updateTitle
};