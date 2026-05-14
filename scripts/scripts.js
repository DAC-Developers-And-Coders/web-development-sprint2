const slides = document.querySelectorAll(".photo-stages");

let index = 0;

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const chooseBtn = document.getElementById("chooseBtn");

const showLoginBtn = document.getElementById("showLoginBtn");
const loginBtn = document.getElementById("loginBtn");

const showSlide = (newIndex) => {
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


const chooseSlide = () => {
    const chosenFeature = prompt(
        `Escolha uma etapa de 1 até ${slides.length}`
    );

    if (chosenFeature !== null) {
        const slideIndex = parseInt(chosenFeature);

        if (!isNaN(slideIndex) && slideIndex >= 1 && slideIndex <= slides.length) {
            showSlide(slideIndex - 1);
        } else {
            alert("Valor inválido");
        }
    }
}

showSlide(index);

nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
});

prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
});

chooseBtn.addEventListener("click", () => {
    chooseSlide();
});

showLoginBtn.addEventListener("click", () => {
    loginBtn.classList.toggle("hidden");
})