
import SimpleLightbox from 'simplelightbox'; 

const galleryElement = document.getElementById('gallery');
const loaderElement = document.querySelector('.loader');

let lightbox; 

export function createGallery(images) {
    if (!galleryElement) {
        console.error('Gallery element not found!');
        return;
    }

    const markup = images.map(image => `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.webformatURL}"
                    alt="${image.tags}"
                    loading="lazy"
                />
            </a>
            <div class="info">
                <p><b>Likes</b> ${image.likes}</p>
                <p><b>Views</b> ${image.views}</p>
                <p><b>Comments</b> ${image.comments}</p>
                <p><b>Downloads</b> ${image.downloads}</p>
            </div>
        </li>
    `).join(''); 

    galleryElement.innerHTML = markup; 

    if (lightbox) {
        lightbox.refresh(); 
    } else {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    }
}

export function clearGallery() {
    if (galleryElement) {
        galleryElement.innerHTML = '';
    }
    if (lightbox) {
        lightbox.destroy();
        lightbox = null; 
    }
}

export function showLoader() {
    if (loaderElement) {
        loaderElement.classList.remove('is-hidden');
    }
}

export function hideLoader() {
    if (loaderElement) {
        loaderElement.classList.add('is-hidden');
    }
}