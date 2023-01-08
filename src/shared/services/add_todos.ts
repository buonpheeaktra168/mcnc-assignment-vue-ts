import { db } from "./firebase_sdk";
import { collection, addDoc } from "firebase/firestore";

let newTodo: {
    title: string,
    isCompleted: boolean
}

export const addNewTodo = async (title: string) => {
    newTodo = {
        title: title,
        isCompleted: false
    }
    const docRef = await addDoc(collection(db, "todos"), {
        title: newTodo.title,
        isCompleted: newTodo.isCompleted,
    })

}