<template>
    <div class="container">
        <div class="left-side">
            <input type="checkbox" id="checkbox" v-model="props.isCompleted" @click="isCheck" />
            <h2>{{ props.title }}</h2>
        </div>
        <button @click="editTodo">Edit</button>
        <button @click="deleteTodo" class="delete">Delete</button>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ title: String, isCompleted: boolean }>()
const emits = defineEmits(['deleteTodo', 'isCheck', 'editTodo'])

const deleteTodo = () => {
    emits("deleteTodo");
}

const isCheck = () => {
    emits("isCheck");
}

const editTodo = () => {
    emits("editTodo");
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

        .title {
            background-color: red;
        }
    }

    button {
        padding: 12px;
        border: 0;
        background-color: rgb(0, 81, 255);
        color: #fff;
        font-size: 18px;
        width: 80px;
        margin-left: 8px;
    }
    .delete {
        background-color: red;
    }

}
</style>