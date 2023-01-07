<template>
    <header>
        <nav class="navbar">
            <ul>
                <RouterLink class="link" to="/">{{ $t('navbar.home') }}</RouterLink>
                <RouterLink class="link" to="/todo">{{ $t('navbar.todo') }}</RouterLink>
                <RouterLink class="link" to="/about">{{ $t('navbar.about') }}</RouterLink>
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
header {
    display: flex;
    background-color: rgb(68, 68, 68);
    margin: 0;

    .navbar {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;

        .link {
            flex: 1;
            font-size: 30px;
            margin: 0 8px 0 8px;
            text-decoration-line: none;
            color: #ffff;
        }

        .select-lang {

            justify-content: flex-end;
        }
    }
}
</style>