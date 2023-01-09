<template>
    <div>
        <Loading v-if="isLoading" title="Loading..." />
        <AddTodo />
        <div v-for="todo in todos" :key="todo.id">
            <ListTodo :title="todo.title" :isCompleted="todo.isCompleted" @delete="handleDelete()"
                @isDelete="handelDelete(todo.id)" />
        </div>
    </div>

</template>

<script lang="ts" setup>
import { useTodoStore } from '@/shared/stores/TodoStrore';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, onMounted, ref } from 'vue';

const Loading = defineAsyncComponent(() => import('@/shared/components/LoadingSpinner.vue'))
const AddTodo = defineAsyncComponent(() => import('@/views/todo/components/Add_Todo.vue'))
const ListTodo = defineAsyncComponent(() => import('@/views/todo/components/List_Todo.vue'))

const todoStore = useTodoStore()
const { todos, isLoading } = storeToRefs(todoStore)



const handelDelete = async (id: string) => {
    await todoStore.deleteExistingTodo(id)
}

const handleDelete = () => {

}

onMounted(() => { todoStore.getTodos() })
</script>