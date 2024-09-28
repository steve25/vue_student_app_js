import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://vue-student-app-api.onrender.com/api',
  baseURL: 'http://127.0.0.1:8080/api',
  timeout: 1000
})

export const getStudents = async () => {
  const { data } = await api.get('/students')

  return data
}

export const getStudent = async (id) => {
  const { data } = await api.get(`/students/${id}`)

  return data
}

export const addStudent = async (student) => {
  try {
    return await api.post(`/students`, student)
  } catch (error) {
    return error
  }
}
