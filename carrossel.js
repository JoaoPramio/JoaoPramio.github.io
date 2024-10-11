let currentIndex = 0; 
const images = document.querySelectorAll('.foto-container'); 
const visibleImagesCount = 3; 

function showImages() {
    images.forEach((img, index) => {
        if (index >= currentIndex && index < currentIndex + visibleImagesCount) {
            img.style.display = 'flex';
        } else {
            img.style.display = 'none'; 
        }
    });
}

function nextImage() {
    currentIndex++;
    if (currentIndex + visibleImagesCount > images.length) {
        currentIndex = 0;
    }
    showImages();
}

function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - visibleImagesCount; 
    }
    showImages();
}


showImages();
