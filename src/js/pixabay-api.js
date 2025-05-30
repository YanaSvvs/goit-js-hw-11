import axios from 'axios';

const API_KEY = '50595103-65097a90456797714ffdbb949'; 
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    try {
        const response = await axios.get(`${BASE_URL}?${params.toString()}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching images from Pixabay:", error);
        throw error;
    }
}
