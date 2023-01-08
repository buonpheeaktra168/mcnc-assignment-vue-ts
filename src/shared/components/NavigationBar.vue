<template>
    <header>
        <nav class="navbar">
            <ul>
                <RouterLink class="link" to="/">{{ $t('navbar.home') }}</RouterLink>
                <RouterLink class="link" to="/todo">{{ $t('navbar.todo') }}</RouterLink>
            </ul>
            <select class="select-lang" v-model="lang" @change="handleChage($event)">
                <option value="km">{{ $t("button.khmer") }}</option>
                <option value="en">{{ $t("button.english") }}</option>
            </select>
        </nav>
    </header>
</template>

<script setup lang="ts">


const lang: String = localStorage.getItem("lang") || "en";

function handleChage(event: any) {
    localStorage.setItem("lang", event.target.value);
    window.location.reload();
};
</script>

<style lang="scss" scoped>

</style>