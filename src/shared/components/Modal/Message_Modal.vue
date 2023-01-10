<template>
    <transition name="modal-animation">
        <div class="modal">
            <transition name="modal-animation-inner">
                <div class="modal-inner">
                    <h1 v-if="props.title">{{ title }}</h1>
                    <p v-if="props.message">{{ props.message }}</p>
                    <i class="fa fa-times-circle"></i>
                    <slot />
                    <div class="button">
                        <button @click="onCancel" class="cancel">{{ props.cancel }}</button>
                        <button @click="onOK" class="ok">{{ props.ok }}</button>
                    </div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps<{
    title: String,
    message: String,
    ok: String,
    cancel: String
}>()

const emits = defineEmits(["onCancel", "onOK"])
const onCancel = () => { emits("onCancel") }
const onOK = () => { emits("onOK") }

</script>

<style lang="scss" scoped>
.button {
    display: flex;
    flex-direction: row;

    button {
        border: 0;
        padding: 12px;
        margin: 8px;
        width: 120px;
        color: #fff;
        font-size: 16px;
    }

    .ok {
        background-color: rgb(255, 0, 98);
    }

    .cancel {
        background-color: #3d3dff;
    }
}
</style>