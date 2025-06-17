import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE_URL;

export const login = (credentials) =>
  axios.post(`${API_URL}/auth/login`, credentials);

export const register = (userData) =>
  axios.post(`${API_URL}/auth/register`, userData);
