import { defineStore } from 'pinia'
import main from '../services'
import type { Todo } from '../utils/todo.interface'
import type { TodoStore } from '../utils/TodoStore.interface'
import { collection, getDocs } from 'firebase/firestore'

const { db, addNewTodo, deleteTodo, updateTitle, updateCompleted } = main

export const useTodoStore = defineStore('useTodoStore', {
  state: (): TodoStore => ({
    todos: [],
    isLoading: false,
  }),

  getters: {
    getAllCompleted(state) {
      return state.todos.filter((f) => f.isCompleted == true)
    }
  },

  actions: {
    async getTodos() {
      this.isLoading = true;

      const resData: Todo[] = [];

      const querySnapshot = await getDocs(collection(db, "todos"));

      querySnapshot.forEach((res: any) => {
        const mydata = {
          id: res.id,
          title: res.data().title,
          isCompleted: res.data().isCompleted
        };
        resData.push(mydata);
      });

      this.todos = resData;

      // console.log('myData', this.todos)

      this.isLoading = false;
    },

    async addTodo(newtitle: string) {
      const myData = {
        id: `${Math.floor(Math.random() * 100)}`,
        title: newtitle,
        isCompleted: false
      };

      await addNewTodo(newtitle);

      this.todos.push(myData);

      this.getTodos();
    },

    async deleteExistingTodo(id: string) {

      this.todos.filter((d) => d.id != id);

      await deleteTodo(id).then(async () => await this.getTodos())

    }
  },
})
