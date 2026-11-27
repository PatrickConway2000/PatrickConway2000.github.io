const images = [
    {
        src: "images/cliffsOfMoher.webp",
        alt: "The Cliffs of Moher"
    },
    {
        src: "images/giantsCauseway.webp",
        alt: "The Giant's Causeway basalt columns"
    },
    {
        src: "images/stockholm.jpeg",
        alt: "Stockholm in Sweden"
    },
    {
        src: "images/kalmar.jpg",
        alt: "Kalmar castle in Sweden"
    }
];

// Start with the first image.
let currentIndex = 0;

// Find the HTML elements.
const galleryImage = document.getElementById("gallery-image");
const imageCounter = document.getElementById("image-counter");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

// Update the displayed image, description and counter.
function showImage() {
    galleryImage.src = images[currentIndex].src;
    galleryImage.alt = images[currentIndex].alt;

    imageCounter.textContent =
        `Image ${currentIndex + 1} of ${images.length}`;
}

// Go forwards. After the last image, return to the first.
nextButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

// Go backwards. Before the first image, jump to the last.
previousButton.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

// Make the initial display match the array.
showImage();