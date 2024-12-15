import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
const MY_DOCS = process.env.NEXT_PUBLIC_MY_DOCS;

export async function ProjectsData() {
    const response = await axios.get(`${API_URL}projects/`);
    return response.data;
}

export async function PostsData() {
        const response = await axios.get(`${API_URL}posts/`);
        return response.data;
}

export async function PostData(id: number) {
    const response = await axios.get(`${API_URL}posts/${id}`);
    return response.data;
}

export async function CategoriesData() {
    const response = await axios.get(`${API_URL}categories/`);
    return response.data;
}

export async function getDocs () {
    const response = await axios.get(`${MY_DOCS}`);
    return response.data;
}