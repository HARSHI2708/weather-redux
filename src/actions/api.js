

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-domain.com',
});

export const loginUser = async (formData) => {
  try {
    const response = await api.post('/login', formData);
    return response.data;
  } catch (error) {
    throw error; 
  }
};

export const signupUser = async (formData) => {
  try {
    const response = await api.post('/signup', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
