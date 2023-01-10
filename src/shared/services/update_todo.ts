import { db } from "./firebase_sdk";
import { doc, updateDoc } from "firebase/firestore";

const updateCompleted = async (id: string, completed: boolean) => {
console.log(completed);

    await updateDoc(doc(db, "todos", id), {
        isCompleted: completed,
    })
}

const updateTitle = async (id: string, title: string) => {
    await updateDoc(doc(db, "todos", id), {
        title: title
    })
}

export { updateCompleted, updateTitle }