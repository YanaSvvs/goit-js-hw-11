// src/js/main.js

import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

import 'simplelightbox/dist/simple-lightbox.min.css'; 

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

hideLoader();

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
        iziToast.error({
            title: 'Error',
            message: 'Search query cannot be empty!',
            position: 'topRight',
            timeout: 3000,
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);
        hideLoader();

        if (data.hits && data.hits.length > 0) {
            createGallery(data.hits);
        } else {
            iziToast.info({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                timeout: 5000,
            });
        }
    } catch (error) {
        hideLoader();
        console.error("Search failed:", error);
        iziToast.error({
            title: 'Error',
            message: `Failed to fetch images: ${error.message || 'Unknown error'}. Please try again later.`,
            position: 'topRight',
            timeout: 5000,
        });
    }

    searchForm.reset();
});