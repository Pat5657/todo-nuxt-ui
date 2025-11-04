<script setup lang="ts"></script>

<template>
  <UHeader title="ToDo" :toggle="false">
    <template #title>
      <div class="flex items-center text-2xl">
        <UIcon name="i-lucide-clipboard-list" class="my-auto mr-1" />
        <span>To<span class="text-primary">Do</span></span>
      </div>
    </template>
  </UHeader>
</template>
