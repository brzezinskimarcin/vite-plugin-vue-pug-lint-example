<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template lang="pug">
.greetings
  h1.green {{ msg }}
  h3
    | You’ve successfully created a project with 
    a(target='_blank', href='https://vitejs.dev/') Vite 
    | + 
    a(target='_blank', href='https://vuejs.org/') Vue 3
    |.
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
