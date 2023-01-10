<template>
    <div>
        <Loading v-if="isLoading" title="Loading..." />
        <AddTodo />
        <div v-for="todo in todos" :key="todo.id">
            <ListTodo :title="todo.title" :isCompleted="todo.isCompleted" @deleteTodo="openModal(todo.id)"
                @isCheck="handlecheck(todo.id)" />
        </div>
        <MessageModal v-if="isOpenModal" title="Message!" message="Are you sure do you want to delete?" ok="OK"
            cancel="No" @onOK="handleDelete(todoId)" @onCancel="closeModal" />
    </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/shared/stores/TodoStrore';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, onMounted, ref } from 'vue';

const Loading = defineAsyncComponent(() => import('@/shared/components/LoadingSpinner.vue'))
const AddTodo = defineAsyncComponent(() => import('@/views/todo/components/Add_Todo.vue'))
const ListTodo = defineAsyncComponent(() => import('@/views/todo/components/List_Todo.vue'))
const MessageModal = defineAsyncComponent(() => import('@/shared/components/Modal/Message_Modal.vue'))

const todoStore = useTodoStore()
const { todos, isLoading } = storeToRefs(todoStore)
const todoId = ref('')
const isOpenModal = ref(false)

const openModal = (id: string) => {
    todoId.value = id
    isOpenModal.value = true
}

const closeModal = () => {
    isOpenModal.value = false
}

onMounted(() => { todoStore.getTodos() })

const handleDelete = async (id: string) => {
    await todoStore.deleteExistingTodo(id)
    closeModal()
}

const handlecheck = async (id: string) => {
    await todoStore.handleCompleted(id)
}
</script>
