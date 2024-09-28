<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getStudent } from '@/api';

const route = useRoute();
const router = useRouter();

const id = route.params.id;
let student = ref({});

onMounted(async () => {
  const response = await getStudent(id);

  if (response.status !== 200) {
    await router.push({ path: '/not-found' });
    router.go(0);
  }
  student.value = response.data;
});
</script>
<template>
  <div>
    <p>{{ student.id }}</p>
    <p>{{ student.name }}</p>
    <p>{{ student.email }}</p>
  </div>
</template>

<style scoped></style>
