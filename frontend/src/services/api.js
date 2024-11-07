import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchProjects = async () => {
    const response = await axios.get(`${API_URL}projects/`);
    return response.data;
};

export const fetchPosts = async () => {
    const response = await axios.get(`${API_URL}posts/`);
    return response.data;
};

export const fetchCategories = async () => {
    const response = await axios.get(`${API_URL}categories/`);
    return response.data;
};