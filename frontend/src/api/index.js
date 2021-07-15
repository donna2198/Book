

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

export const fetchBook = () => API.get('/book');
export const createBook = (newPost) => API.post('/book', newPost);
export const updateBook = (id, updatedPost) => API.patch(`/book/${id}`, updatedPost);
export const deleteBook = (id) => API.delete(`/book/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);