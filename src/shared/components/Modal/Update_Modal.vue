<template>
    <transition name="modal-animation">
        <div class="modal">
            <transition name="modal-animation-inner">
                <div class="modal-inner">
                    <input v-model="inputValue" />
                    <div class="button">
                        <button class="cancel" @click="onCancel">Cancel</button>
                        <button class="add" @click="updateTitle">Update</button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { defineEmits, ref, defineProps } from 'vue';
const emits = defineEmits(["onCancel", "updateTitle"]);
const props = defineProps(['newtitle'])


const inputValue = ref(props.newtitle)
const onCancel = () => { emits("onCancel") }

const updateTitle = () => {
    console.log(props.newtitle);

    emits('updateTitle', inputValue.value)
}


</script>




<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-enter-from {
    opacity: o;
    transform: scale(0.002s);
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    background-color: rgb(255, 255, 255, 0.7);
    left: 0;
    border-radius: 12px;

    .modal-inner {
        display: flex;
        position: relative;
        width: 60%;
        height: 40%;
        box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        background-color: #ffff;
        padding: 64px 16px;
        border-radius: 12px;
        justify-content: space-between;
        flex-direction: column;

        input {
            width: 90%;
            height: 50px;
            border: 0;
            font-size: 16px;
            padding-left: 12px;
            box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
        }

        .button {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;

            button {
                padding: 12px;
                border: 0;
                background-color: rgb(0, 81, 255);
                color: #fff;
                font-size: 18px;
                margin: 12px;
                width: 120px;
            }

            .cancel {
                background-color: red;
            }

            .add {
                background-color: blue;
            }
        }
    }

}
</style>