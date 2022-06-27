import axios from 'axios'

export const instance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
  headers: {
    'X-API-Key': process.env.API_KEY,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})