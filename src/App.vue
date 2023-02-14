<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/shared/components/NavigationBar.vue'
</script>

<template>
  <NavigationBar />
  <RouterView key="$route.fullPath" v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

