import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vue-student-app-api.onrender.com/api',
  // baseURL: 'http://127.0.0.1:8080/api',
  timeout: 1000
});

export const getStudents = async () => {
  try {
    return await api.get('/students');
  } catch (error) {
    return error;
  }
};

export const getStudent = async (id) => {
  try {
    return await api.get(`/students/${id}`);
  } catch (error) {
    return error;
  }
};

export const addStudent = async (student) => {
  try {
    return await api.post(`/students`, student);
  } catch (error) {
    return error;
  }
};

export const updateStudent = async (student) => {
  try {
    return await api.put(`/students`, student);
  } catch (error) {
    return error;
  }
};
export const removeStudent = async (id) => {
  try {
    return await api.delete(`/students/${id}`);
  } catch (error) {
    return error;
  }
};
