const cards = document.querySelectorAll(".card");
const imgCards = document.querySelectorAll(".img-card");

cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    imgCards[index].classList.add("img-card-hover");
  });
  card.addEventListener("mouseleave", () => {
    imgCards[index].classList.remove("img-card-hover");
  });
});
