<script setup>
import { onMounted, ref } from 'vue';
import { getStudents, removeStudent } from '@/api';

import TheButton from '../components/TheButton.vue';

const students = ref([]);
const error = ref(null);
const isLoaded = ref(false);

onMounted(async () => {
  loadStudents();
});

const loadStudents = async () => {
  isLoaded.value = false;
  const response = await getStudents();

  if (response.status !== 200) {
    error.value = 'Internal database error.';
  } else {
    students.value = response.data.sort((a, b) => {
      return a.id - b.id;
    });
  }

  isLoaded.value = true;
};

const deleteStudent = async (id) => {
  const response = await removeStudent(id);

  console.log(response);

  if (response.status !== 200) {
    console.log('cant remove');
  } else {
    console.log('ok');
    loadStudents();
  }
};
</script>

<template>
  <nav class="add-button">
    <TheButton type="link" color="blue" to="/add">Add new student</TheButton>
  </nav>
  <section v-if="isLoaded">
    <div class="error-box" v-if="error != null">
      <p>
        {{ error }}
      </p>
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="student.id">
          <td>{{ index + 1 }}</td>
          <td>
            <RouterLink :to="'/student/' + student.id">{{ student.name }}</RouterLink>
          </td>
          <td>
            <a :href="`mailto:${student.email}`">{{ student.email }}</a>
          </td>
          <td class="action-buttons">
            <TheButton type="link" color="green" :to="'/student/edit/' + student.id"
              >Edit</TheButton
            >
            <TheButton type="button" color="red" @click="deleteStudent(student.id)">
              Delete
            </TheButton>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style>
.add-button {
  margin: 1.7rem 0;
}

section {
  margin-bottom: 1rem;
}

.error-box {
  width: fit-content;
  margin: 2rem auto;
  padding: 0.7rem 1.4rem;
  border: 1px solid red;
  border-radius: 0.4rem;
  background-color: #ff00002a;
  color: red;
}

table {
  width: 100%;
  background-color: #fefae0;
  border-radius: 0.4rem;
  border-collapse: collapse;
  border-style: hidden;
  border-spacing: 0;
  box-shadow: 0 0 0 1px #ccd5ae;
  color: #73512e;
  overflow: hidden;
}

tr {
  border-bottom: 1px solid #ccd5ae;
}

td,
th {
  border-left: 1px solid #ccd5ae;
}

table td > a {
  color: #73512e;
  text-decoration: none;
}

table td > a:hover {
  text-decoration: underline;
  color: #d4a373;
}

table tr > th:first-child,
table tr > td:first-child {
  text-align: right;
}

table tr > th:last-child {
  text-align: center;
}

table th,
table td {
  padding: 8px;
  text-align: left;
}

table tbody > tr:nth-child(odd) {
  background: #faedcd;
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
</style>
