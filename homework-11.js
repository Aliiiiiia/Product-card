let user = null;

const subscribeForm = document.querySelector(".subscribe-form");
const emailInput = document.querySelector(".subscribe-form__input");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue || !emailPattern.test(emailValue)) {
      alert("Пожалуйста, введите корректный email!");
      return;
    }

    const formData = {
      email: emailValue,
    };

    console.log(formData);
    subscribeForm.reset();
  });
}

const registerBtn = document.querySelector(".register-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".modal__close");
const registerForm = document.querySelector(".register-form");

const closeModal = () => {
  modal.classList.remove("modal-showed");
};

if (registerBtn && modal) {
  registerBtn.addEventListener("click", () => {
    modal.classList.add("modal-showed");
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}

if (registerForm) {
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isFormValid = registerForm.checkValidity();
    const password = registerForm.elements.password.value;
    const confirmPassword = registerForm.elements.confirmPassword.value;

    if (!isFormValid || password !== confirmPassword) {
      alert(
        "Регистрация отклонена! Проверьте правильность заполнения всех полей и совпадение паролей.",
      );
      return;
    }

    const userData = {
      name: registerForm.elements.name.value.trim(),
      surname: registerForm.elements.surname.value.trim(),
      birthDate: registerForm.elements.birthDate.value,
      login: registerForm.elements.login.value.trim(),
      password: password,
      createdOn: new Date(),
    };

    user = userData;
    console.log(user);

    registerForm.reset();
    closeModal();
  });
}
