<template>
    <div>
        <select class="select-lang" v-model="lang" @change="handleChage($event)">
            <option value="km">{{ $t("button.khmer") }}</option>
            <option value="en">{{ $t("button.english") }}</option>
        </select>
    </div>
</template>

<script lang="ts" setup>
const lang: String = localStorage.getItem("lang") || "en";
function handleChage(event: any) {
    localStorage.setItem("lang", event.target.value);
    window.location.reload();
};
</script>