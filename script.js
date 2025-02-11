function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

const galleries = {
    cultural: ['oft1.jpg', 'oft2.jpg', 'oft3.jpg'],
    mountains: ['of9.jpg', 'of8.jpg', 'ofg11.jpg'],
    rivers: ['of10.jpg', 'c.jpg', 'm1.jpg'],
};

function showGallery(category) {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';

    const images = galleries[category];
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`;
        imgElement.loading = "lazy";
        imgElement.onerror = function() {
            this.src = 'images/default.jpg';
        };
        imgElement.addEventListener('click', openOverlay);
        galleryContainer.appendChild(imgElement);
    });

    showNotification(`გალერეა შეიცვალა: ${category}`);
    document.getElementById('backButton').style.display = 'block';
}

function showMainPage() {
    document.getElementById('gallery').innerHTML = '';
    showNotification("დაბრუნდით მთავარ გვერდზე");
    document.getElementById('backButton').style.display = 'none';
}

function openOverlay(event) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = event.target.src;
    overlay.classList.add('active');
}

function closeOverlay() {
    document.getElementById('overlay').classList.remove('active');
}

function toggleMenu() {
    document.querySelector('.sidebar').classList.toggle('open');
}
