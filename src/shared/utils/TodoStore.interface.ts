import type { Todo } from "./todo.interface";

export interface TodoStore {
    todos: Todo[],
    isLoading: boolean
}
