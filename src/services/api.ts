import axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
    baseURL: 'https://localhost:3000/api',
});
