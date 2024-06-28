function validName(event) {
  const name = document.getElementById("name").value;
  const error = document.getElementsByClassName("error")[0];

  if (name.trim() === "") {
    error.style.display = "block";
    event.preventDefault();
  } else {
    error.style.display = "none";
  }
}

function validEmail(event) {
  const email = document.getElementById("email").value;
  const error = document.getElementsByClassName("email-error")[0];
  const invalidEmail = document.getElementsByClassName("invalid-email")[0];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.trim() === "") {
    error.style.display = "block";
    invalidEmail.style.display = "none";
    event.preventDefault();
  } else if (!emailRegex.test(email.trim())) {
    invalidEmail.style.display = "block";
    error.style.display = "none";
    event.preventDefault();
  } else {
    error.style.display = "none";
    invalidEmail.style.display = "none";
  }
}

function validPhone(event) {
  const phone = document.getElementById("phone").value;
  const phoneError = document.getElementsByClassName("phone-error")[0];
  const invalidPhone = document.getElementsByClassName("invalid-phone")[0];
  const phoneRegex = /^[6-9]\d{9}$/;

  if (phone.trim() === "") {
    phoneError.style.display = "block";
    invalidPhone.style.display = "none";
    event.preventDefault();
  } else if (!phoneRegex.test(phone.trim())) {
    invalidPhone.style.display = "block";
    phoneError.style.display = "none";
    event.preventDefault();
  } else {
    invalidPhone.style.display = "none";
    error.style.display = "none";
  }
}

function validMessage() {
  const message = document.getElementById("message").value;
  const error = document.getElementsByClassName("message-error")[0];

  if (message.trim() === "") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}

function checkErrors(event) {
  validName(event);
  validEmail(event);
  validPhone(event);
  validMessage(event);
}

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  checkErrors(event);
});
