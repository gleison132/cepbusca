// src/services/newsService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getNoticias = () => api.get('/noticias');
export const getNoticia = (id) => api.get(`/noticias/${id}`);
export const createNoticia = (data) => api.post('/noticias', data);
export const updateNoticia = (id, data) => api.put(`/noticias/${id}`, data);
export const deleteNoticia = (id) => api.delete(`/noticias/${id}`);
