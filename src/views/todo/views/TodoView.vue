<template>
    <div>
        Hello
    </div>
</template>

<script lang="ts" setup>
import { useTodoStore } from '@/shared/stores/TodoStrore';
import { storeToRefs } from 'pinia';
import { defineAsyncComponent, onMounted } from 'vue';

const todoStore = useTodoStore()

const { todos, isLoading } = storeToRefs(todoStore)
console.log(todos)

onMounted(() => { todoStore.getTodos() })
</script>