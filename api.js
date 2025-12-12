import axios from 'axios'
const API_BASE = import.meta.env.VITE_API_BASE || 'https://backup-gyuy.onrender.com'
const client = axios.create({ baseURL: API_BASE, timeout: 15000 })
export function setAuth(token){ if(token) client.defaults.headers.common['Authorization'] = 'Bearer ' + token; else delete client.defaults.headers.common['Authorization'] }
export default client
