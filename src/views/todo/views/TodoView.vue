<template>
    <div>
        <!-- <Loading v-if="isLoading" title="Loading..." /> -->
        <AddTodo />
        <div v-for="todo in todos" :key="todo.id">
            <ListTodo :title="todo.title" :isCompleted="todo.isCompleted" @deleteTodo="toggleMessageModal(todo.id)"
                @isCheck="handlecheck(todo.id)" @editTodo="toggleUpdateModal(todo.id, todo.title)" />
        </div>
        <MessageModal v-if="isOpenModal" :title="messageTitile.message" :message="messageTitile.titleMessage"
            :ok="messageTitile.ok" :cancel="messageTitile.no" @onOK="handleDelete(todoId)"
            @onCancel="toggleMessageModal" />
        <UpdateModal v-if="isOpenUpdateModal" :newtitle="newTitle" @onCancel="toggleUpdateModal"
            @updateTitle="handleEdit" />
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
const UpdateModal = defineAsyncComponent(() => import('@/shared/components/Modal/Update_Modal.vue'))

const todoStore = useTodoStore()
const { todos, isLoading } = storeToRefs(todoStore)
const todoId = ref('')
const isOpenModal = ref(false)
const isOpenUpdateModal = ref(false)
const newTitle = ref('')
const messageTitile = ref({
    message: 'Message',
    titleMessage: 'Are you sure do you want to delete?',
    ok: 'OK',
    no: 'No',
})

const toggleMessageModal = (id: string) => {
    todoId.value = id
    isOpenModal.value = !isOpenModal.value
}

const toggleUpdateModal = (id: string, title: string) => {
    todoId.value = id;
    newTitle.value = title;
    isOpenUpdateModal.value = !isOpenUpdateModal.value
}

onMounted(() => { todoStore.getTodos() })

const handleDelete = async (id: string) => {
    await todoStore.deleteExistingTodo(id);
    toggleMessageModal(id);
}

const handlecheck = async (id: string) => {
    await todoStore.handleCompleted(id)
}

const handleEdit = (val: string) => {
    if (val == '') {
        alert('You can not update without empty field!')
    } else {
        todoStore.handleUpdate(todoId.value, val);
        isOpenUpdateModal.value = !isOpenUpdateModal.value
        alert('Update successfully');
    }

}
</script>
