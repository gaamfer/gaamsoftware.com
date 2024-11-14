import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;

export async function ProjectsData() {
    const response = await axios.get(`${API_URL}projects/`);
    return response.data;
}

export async function PostsData() {
        const response = await axios.get(`${API_URL}posts/`);
        return response.data;
}

export async function CategoriesData() {
    const response = await axios.get(`${API_URL}categories/`);
    return response.data;
}
