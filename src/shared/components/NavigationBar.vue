<template>
    <el-header class="header">
        <nav class="navbar">
            <ul>
                <RouterLink class="link" to="/">{{ $t('navbar.home') }}</RouterLink>
                <RouterLink class="link" to="/todo">{{ $t('navbar.todo') }}</RouterLink>
            </ul>
            <SwitchLanguage class="switch-lang" />
        </nav>
    </el-header>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const SwitchLanguage = defineAsyncComponent(() => import('@/shared/components/Switch_Language.vue'))

</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
    width: 100wh;

    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .switch-lang {
            flex: 1;
            justify-content: flex-end;
            padding: 20px;
        }

        ul {
            display: flex;

            .link {
                font-size: 30px;
                padding: 8px;
                text-decoration-line: none;

                &:active {
                    color: red;
                }
            }
        }
    }


}
</style>