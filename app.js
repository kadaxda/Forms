(function form() {
  const email = document.querySelector("#mail");
  let mailError = document.createElement("div");
  email.parentElement.appendChild(mailError);
  email.addEventListener("input", (e) => {
    if (email.validity.valid) {
      mailError.textContent = "";
    } else if (email.validity.valueMissing) {
      mailError.textContent = "Please enter an Email";
    } else {
      mailError.textContent = "Email not valid";
    }
  });

  const country = document.querySelector("#country");
  let countryError = document.createElement("div");
  country.parentElement.appendChild(countryError);
  country.addEventListener("input", (e) => {
    if (country.validity.valid) {
      countryError.textContent = "";
    } else if (country.validity.valueMissing) {
      countryError.textContent = "Please enter a Country.";
    }
  });

  const zip = document.querySelector("#zip");
  let zipError = document.createElement("div");
  zip.parentElement.appendChild(zipError);
  zip.addEventListener("input", (e) => {
    if (zip.validity.valid) {
      zipError.textContent = "";
    } else if (zip.validity.valueMissing) {
      zipError.textContent = "Please enter a zip code";
    } else if (zip.validity.rangeOverflow) {
      zipError.textContent =
        "Your zip code is too big. Please enter a 5 digit zip code";
    } else if (zip.validity.rangeUnderflow) {
      zipError.textContent =
        "Your zip code is too low. Please enter a 5 digit zip code";
    }
  });

  const password = document.querySelector("#password");
  let passwordError = document.createElement("div");
  password.parentElement.appendChild(passwordError);
  password.addEventListener("input", () => {
    if (password.validity.valid) {
      passwordError.textContent = "";
    } else if (password.validity.tooShort) {
      passwordError.textContent =
        "Please enter a at least 8 Charcter long password!";
    }
  });

  const passwordConfirm = document.querySelector("#passwordConfirm");
  let passwordConfirmError = document.createElement("div");
  passwordConfirm.parentElement.appendChild(passwordConfirmError);
  passwordConfirm.addEventListener("input", () => {
    if (
      passwordConfirm.validity.valid &&
      passwordConfirm.value == password.value
    ) {
      passwordConfirmError.textContent = "";
    } else if (passwordConfirm.value != password.value) {
      passwordConfirmError.textContent = "Passwords dont match";
    }
  });

  const submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener("click", (e) => {
    if (
      email.validity.valid == true &&
      country.validity.valid == true &&
      zip.validity.valid == true &&
      password.validity.valid == true &&
      passwordConfirm.validity.valid == true
    ) {
      let highFive = document.createElement("div");
      highFive.textContent = "High Five";
      document.body.appendChild(highFive);
      e.preventDefault();
    } else {
      let errorMsg = document.createElement("div");
      errorMsg.textContent = "Please fill in the form correctly";
      document.body.appendChild(errorMsg);
      setTimeout(() => {
        document.body.removeChild(errorMsg);
      }, 1000);
      e.preventDefault();
    }
  });
})();
