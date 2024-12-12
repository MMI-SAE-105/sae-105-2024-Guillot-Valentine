// MENU
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}


//CAROUSEL
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__btn--prev");
const nextButton = document.querySelector(".carousel__btn--next");

if (carousel) {

  prevButton.addEventListener("click", (evt) => {
    carousel.scrollBy({ left: -350, behavior: "smooth" });
  });

  nextButton.addEventListener("click", (evt) => {
    carousel.scrollBy({ left: +350, behavior: "smooth" });
  });
}

//ACCORDEON
const accordeon = document.querySelector(".accordeon");
accordeon.addEventListener("click",() =>{
    accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
}
);