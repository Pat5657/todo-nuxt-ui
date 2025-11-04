<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <UApp>
    <NavBar />

    <UMain class="pt-4 md:pt-8">
      <RouterView />
    </UMain>
  </UApp>
</template>

<style scoped></style>
