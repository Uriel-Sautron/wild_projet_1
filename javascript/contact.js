const form = document.querySelector("form");
const modalContact = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

const escClose = (e) => {
  console.log(e);
  if (e.keyCode == 27) {
    closeModal(modalContact);
  }
};

const openModal = (modalToOpen, data) => {
  const { name } = data;
  document.body.style.overflow = "hidden";
  modalToOpen.setAttribute("open", "true");
  document.getElementById("modal-title").textContent = `Merci ${name}`;
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  document.body.appendChild(overlay);
};

const closeModal = (modalToClose) => {
  document.body.style.overflow = "auto";
  modalToClose.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("modal-overlay"));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const subjectInput = document.getElementById("subject");
  const data = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
    subject: subjectInput.value,
  };
  openModal(modalContact, data);
  console.log();
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
  subjectInput.value = "";
});

modalClose.addEventListener("click", () => {
  closeModal(modalContact);
});
