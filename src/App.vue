<script setup>
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />

  <div class="container">
    <main>
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0 0 2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.1rem;
  text-align: center;
  background-color: #fffef4;
}

.container {
  width: 800px;
  margin: 0 auto;
}
</style>
