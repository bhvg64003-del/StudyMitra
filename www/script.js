const searchInput = document.querySelector(".search-box input");
const quickCards = document.querySelectorAll(".quick-card");
const navButtons = document.querySelectorAll(".bottom-nav button");

searchInput.addEventListener("input", function () {
  const searchText = this.value.toLowerCase().trim();

  quickCards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(searchText) ? "flex" : "none";
  });
});

quickCards.forEach((card) => {
  card.addEventListener("click", () => {
    const subject = card.querySelector("strong").innerText;
    alert(`${subject} section will be available soon.`);
  });
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});
