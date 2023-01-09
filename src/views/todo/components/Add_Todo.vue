<template>
    <div class="container">
        <button @click="isOpenModal = true">Add Todo</button>
        <Transition>
            <AddModal v-if="isOpenModal" @isClose="closeModal" />
        </Transition>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue';
import { useTodoStore } from '@/shared/stores/TodoStrore';

const AddModal = defineAsyncComponent(() => import('@/shared/components/Modal/Add_Modal.vue'))

const todoStore = useTodoStore()

const isOpenModal = ref(false)

function closeModal() {
    isOpenModal.value = false
}

const handleSubmit = async () => {
    await todoStore.getTodos()
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