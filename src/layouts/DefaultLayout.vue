<template>
  <main>
    <RouterView/>
  </main>
</template>
<script setup>
import {defineComponent} from "vue";

defineComponent({name: 'DefaultLayout'})
</script>
<style scoped lang="scss">
main {
  padding: 24px;
}
</style>