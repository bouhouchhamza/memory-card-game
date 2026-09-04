let imgs = [
  { src: "assets/car.jpg", alt: "Car" },
  { src: "assets/cat.jpg", alt: "Cat" },
  { src: "assets/dog.jpg", alt: "Dog" },
  { src: "assets/forest.jpg", alt: "Forest" },
  { src: "assets/panda.jpg", alt: "Panda" },
  { src: "assets/women.jpg", alt: "Woman" },
];
let cards_front = [...imgs, ...imgs];
let cards_back = "assets/back.jpg";
const card_div = document.getElementById("cards_div");
let firstCard = null;
let secondCard = null;
let lock = false;
let pairs = 0;
let coups = 0;
let coups_el = document.getElementById("coups_trouve");
let pairs_el = document.getElementById("pairs_results");
let victory_message = document.getElementById("vectory_message");
let reset_button = document.getElementById("reset");
function shuffle(array) {
  let current = array.length,
    temp,
    random;
  while (current > 0) {
    random = Math.floor(Math.random() * current);
    current--;
    temp = array[current];

    array[current] = array[random];

    array[random] = temp;
  }
  return array;
}
function renderCards() {
  shuffle(cards_front).forEach((el) => {
    const cards_inner = document.createElement("div");
    const inner_front = document.createElement("img");
    const inner_back = document.createElement("img");
    inner_front.setAttribute("src", el.src);
    inner_front.setAttribute("alt", el.alt);
    inner_front.setAttribute("class", "front");
    inner_back.setAttribute("src", cards_back);
    inner_back.setAttribute("alt", "Back");
    inner_back.setAttribute("class", "back");
    cards_inner.setAttribute("class", "cards_container");
    cards_inner.appendChild(inner_front);
    cards_inner.appendChild(inner_back);
    card_div.appendChild(cards_inner);

    cards_inner.addEventListener("click", () => {
      if (lock === true) {
        return;
      }
      if (cards_inner.classList.contains("matched")) {
        return;
      }
      if (firstCard === cards_inner) {
        return;
      }
      // if (secondCard.classList.contains("matched")) {
      //   return;
      // }
      cards_inner.classList.add("flipped");
      if (firstCard === null) {
        firstCard = cards_inner;
        // coups++;
        // coups_el.textContent = coups;
      } else {
        secondCard = cards_inner;
        coups++;
        coups_el.textContent = coups;
        lock = true;
        if (
          firstCard.querySelector(".front").alt ===
          secondCard.querySelector(".front").alt
        ) {
          pairs++;
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          firstCard = null;
          secondCard = null;
          pairs_el.textContent = pairs;
          lock = false;
        } else {
          setTimeout(function removeflipped() {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");

            firstCard = null;
            secondCard = null;
            lock = false;
          }, 1000);
        }
      }
      if (pairs === imgs.length) {
        victory_message.textContent = "Congratolation";
      }
    });
  });
};
reset_button.addEventListener("click", () => {
  coups = 0;
  pairs = 0;
  pairs_el.textContent = pairs;
  coups_el.textContent = coups;
  victory_message.textContent = "";
  firstCard = null;
  secondCard = null;
  lock = false;
  card_div.innerHTML = "";
  renderCards();
});
renderCards();
