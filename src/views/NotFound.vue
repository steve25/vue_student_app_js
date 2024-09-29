<script setup>
import TheButton from '@/components/TheButton.vue';
</script>
<template>
  <div class="not-found">
    <h1>Page Not Found</h1>
    <TheButton type="link" color="brown" to="/" class="a">Go to Homepage</TheButton>
  </div>
</template>

<style scoped>
.not-found {
  margin: 2rem 0;
  padding-bottom: 2rem;
  color: #73512e;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  font-size: 1.7rem;
  border-bottom: 1px solid black;
}

h1 {
  margin: 0;
}
</style>
