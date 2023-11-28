<script setup lang="ts">
import User from './components/User.vue';

</script>

<template>
  <div class="container">
    <div id="users">
      <User />
      <User />
    </div>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

#users {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}
</style>
