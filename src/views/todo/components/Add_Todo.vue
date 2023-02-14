<template>
    <div class="container">
        <button @click="isOpenModal = true">Add Todo</button>
        <Transition>
            <AddModal v-model="newtitle" v-if="isOpenModal" @onClose="closeModal" @newTitle="handleSubmit" />
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import { useTodoStore } from '@/shared/stores/TodoStrore';

const AddModal = defineAsyncComponent(() => import('@/shared/components/Modal/Add_Modal.vue'))

const todoStore = useTodoStore()
const isOpenModal = ref(false)
const newtitle = ref('')

function closeModal() {
    isOpenModal.value = false
}

const handleSubmit = async (value: string) => {
    if (value === '') {
        alert('Your Field is empty!')
    } else {
        await todoStore.addTodo(value);
        isOpenModal.value = false
    }
}

</script>



<style lang="scss" scoped>
.container {
    display: flex;

    input {
        width: 90%;
        height: 30px;
        border: 0;
        font-size: 16px;
        padding-left: 12px;
    }

    button {
        padding: 12px;
        border: 0;
        background-color: rgb(0, 81, 255);
        color: #fff;
        font-size: 18px;
    }
}
</style>