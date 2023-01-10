<template>
    <div class="container">
        <div class="left-side">
            <input type="checkbox" id="checkbox" v-model="props.isCompleted" />
            <h2>{{ props.title }}</h2>
        </div>
        <button @click="deleteTodo">Delete</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{ title: String, isCompleted: boolean }>()
const emits = defineEmits(['deleteTodo',])

const checked = ref(false)


const deleteTodo = () => {
    emits("deleteTodo");
}



</script>

<style lang="scss" scoped>
.container {
    display: flex;
    background-color: #ffff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 12px;
    padding: 0 8px 0 8px;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);

    .left-side {
        display: flex;
        flex: 1;
        align-items: center;
        flex-direction: row;

        input {
            width: 25px;
            height: 25px;
        }
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