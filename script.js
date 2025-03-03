function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

const galleries = {
    cultural: ['oft1.jpg', 'oft2.jpg', 'oft3.jpg', 'oft4.jpg', 'oft5.jpg', 'oft6.jpg', 'oft7.jpg', 'oft8.jpg', 't.jpg', 't2.jpg'],
    mountains: ['of9.jpg', 'of8.jpg', 'ofg11.jpg', 'ofg12.jpg', 'ofg13.jpg', 'ofg26.jpg', 'ofg27.jpg', 'ofg28.jpg'],
    rivers: ['of10.jpg', 'c.jpg', 'm1.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg', 'm6.jpg', 'm7.jpg', 'm8.jpg', 'r.jpg', 'rr2.jpg'],
};

function showGallery(category) {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';

    if (!galleries[category]) {
        showNotification("მონაცემები ვერ მოიძებნა!");
        return;
    }

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
}

function closeOverlay() {
    document.getElementById('overlay').classList.remove('active');
}
