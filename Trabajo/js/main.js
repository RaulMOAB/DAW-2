const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const contact = document.getElementById("contact");
const submit = document.getElementById("send");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

contact.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
submit.addEventListener("click", closeModal);
