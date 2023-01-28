const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please double check the ${selector}`);
};

const modalBtn = getElement(".modal-btn");
const modal = getElement(".modal-overlay");
const closeBtn = getElement(".close-btn");
const hero = getElement(".hero");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
  hero.classList.add("light-background");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
  hero.classList.remove("light-background");
});
