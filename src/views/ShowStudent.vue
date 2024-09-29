<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getStudent } from '@/api';

import { removeStudent } from '@/api';

import TheButton from '@/components/TheButton.vue';

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

const deleteStudent = async (id) => {
  const response = await removeStudent(id);

  if (response.status !== 200) {
    console.log('cant remove');
  } else {
    await router.push({ path: '/' });
    router.go(0);
  }
};
</script>
<template>
  <div class="container">
    <div class="row">
      <p class="field-name">Id:</p>
      <p class="field-value">{{ student.id }}</p>
    </div>
    <div class="row">
      <p class="field-name">Name:</p>
      <p class="field-value">{{ student.name }}</p>
    </div>
    <div class="row">
      <p class="field-name">Email:</p>
      <p class="field-value">{{ student.email }}</p>
    </div>

    <div class="button-container">
      <TheButton type="link" color="green" :to="'/student/edit/' + student.id">Edit</TheButton>
      <TheButton type="button" color="red" @click.prevent="deleteStudent(student.id)">
        Delete
      </TheButton>
      <TheButton type="link" to="/">Cancel</TheButton>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccd5ae;
  border-radius: 0.5rem;
  background-color: #fefae0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.row {
  display: flex;
  align-items: center;
}

.field-name {
  width: 80px; /* Fixed width to align labels */
  margin-right: 1rem;
  font-weight: bold;
  color: #6b705c;
  text-align: right;
}

.field-value {
  font-size: 1rem;
}

.button-container {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
