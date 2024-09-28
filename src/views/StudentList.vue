<script setup>
import { onMounted, ref } from 'vue';
import { getStudents, getStudent } from '@/api';

import TheButton from '@/components/TheButton.vue';

const students = ref([]);

onMounted(async () => {
  students.value = await getStudents();
});

const deleteStudent = (id) => {
  const index = students.value.findIndex((s) => s.id === id);

  if (index > -1) {
    students.value.splice(index, 1);
  }
};
</script>

<template>
  <nav class="add-button">
    <TheButton type="link" color="blue" to="/add">Add new student</TheButton>
  </nav>
  <section>
    <table>
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
          <td>{{ student.name }}</td>
          <td>
            <a :href="`mailto:${student.email}`">{{ student.email }}</a>
          </td>
          <td class="action-buttons">
            <TheButton type="link" color="green" :to="'/student/' + student.id">Edit</TheButton>
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

table {
  width: 100%;
  background-color: #fefae0;
  border-radius: 0.4rem;
  border-collapse: collapse;
  border-style: hidden;
  border-spacing: 0;
  box-shadow: 0 0 0 1px #d4a373;
  color: #73512e;
}

tr {
  border-bottom: 1px solid #d4a373;
}

td,
th {
  border-left: 1px solid #d4a373;
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
table tr > td:first-child:last-child {
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

/* We shade every second (even) row of the table */
/* We use tbody to make sure we are not shading the header - this preserves the order of the shading */
table tbody > tr:nth-child(odd) {
  background: #faedcd;
}

.action-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

/* Buttons */
/*  */
</style>
