const slides = document.querySelectorAll(".photo-stages");

let index = 0;

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showSlide(newIndex) {
    slides[index].classList.remove("active");
    index = newIndex;

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
});

prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
});