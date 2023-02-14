import { db } from "./firebase_sdk";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, "todos", id));
}