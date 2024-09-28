<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getStudent, updateStudent } from '@/api';

import TheButton from '@/components/TheButton.vue';

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const student = ref({});
const errors = ref([]);

onMounted(async () => {
  const response = await getStudent(id);

  if (response.status !== 200) {
    await router.push({ path: '/not-found' });
    router.go(0);
  }
  student.value = response.data;
});

const editStudentForm = async () => {
  const response = await updateStudent(student.value);

  if (response.status !== 200) {
    errors.value = response.response.data.errors;
    return;
  }

  await router.push({ path: '/' });
  router.go(0);
};
</script>

<template>
  <h2>Add new student</h2>
  <form class="student-form">
    <div class="form-row">
      <label for="student-name">Name:</label>
      <input type="text" id="student-name" v-model="student.name" />
    </div>
    <div class="form-row">
      <label for="student-email">Email:</label>
      <input type="text" id="student-email" v-model="student.email" />
    </div>

    <div class="errors" v-if="errors.length > 0">
      <ul>
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
    </div>

    <div class="button-container">
      <TheButton type="button" color="brown" @click.prevent="editStudentForm">Save</TheButton>
      <TheButton type="link" to="/">Cancel</TheButton>
    </div>
  </form>
</template>

<style scoped>
h2 {
  margin: 2rem 0 0;
  color: #b08968;
}
.student-form {
  width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccd5ae;
  border-radius: 0.5rem;
  background-color: #fefae0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-row {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.form-row label {
  width: 80px; /* Fixed width to align labels */
  margin-right: 1rem;
  font-weight: bold;
  color: #6b705c;
  text-align: right;
}

.form-row input {
  flex: 1; /* Input takes the remaining space */
  padding: 0.5rem;
  border: 1px solid #d4a373;
  border-radius: 0.3rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s ease;
}

.form-row input:focus {
  border-color: #6b705c;
}

.errors {
  width: fit-content;
  margin: 1.4rem auto;
  padding: 1.4rem 1.7rem;
  border: 1px solid red;
  border-radius: 0.4rem;
  background-color: #ff00002a;
  color: red;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  line-height: 1.4;
}

.button-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
