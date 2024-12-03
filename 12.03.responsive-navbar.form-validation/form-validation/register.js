document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Formun dərhal göndərilməsini önləmək

    // Əvvəlki səhvləri təmizlə
    clearErrors();

    // Input dəyərlərini al
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const confirmPassword = document
      .getElementById("confirm-pass")
      .value.trim();
    const profilePicture = document.getElementById("profile-picture").files[0];
    const acceptTerms = document.getElementById("accept-terms-of-use").checked;

    // Username təsdiqləmə
    if (username.length < 3 || username.length > 20) {
      showError("username", "Username must be between 3 and 20 characters.");
    }

    // Email formatını təsdiqlə
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      showError("email", "Please enter a valid email address.");
    }

    // Şifrə təsdiqləmə
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      showError(
        "pass",
        "Password must be at least 8 characters long and contain uppercase, lowercase letters, and numbers."
      );
    }

    // Şifrələrin uyğunluğu
    if (password !== confirmPassword) {
      showError("confirm-pass", "Passwords do not match.");
    }

    // Şəkil seçilməsi
    if (!profilePicture) {
      showError("profile-picture", "Please choose a profile picture.");
    }

    // Şərtlər qəbul edilibmi?
    if (!acceptTerms) {
      showError(
        "accept-terms-of-use",
        "You must agree to the terms and conditions."
      );
    }

    // Əgər səhv yoxdursa, formu göndər
    if (isValidForm()) {
      alert("Form successfully submitted!");
      // document.getElementById("register-form").submit();
    }
  });

// Error mesajını göstərmək funksiyası
function showError(inputId, message) {
  const errorElement = document.getElementById(`${inputId}-error`);
  const inputElement = document.getElementById(inputId);

  errorElement.textContent = message; // Mesajı error sahəsinə yaz
  inputElement.classList.add("is-invalid"); // Input sahəsinə qırmızı sərhəd əlavə et
}

// Əvvəlki səhvləri təmizləmək funksiyası
function clearErrors() {
  const errorMessages = document.querySelectorAll(".text-danger");
  errorMessages.forEach((error) => (error.textContent = "")); // Bütün error mesajlarını təmizlə

  const invalidInputs = document.querySelectorAll(".is-invalid");
  invalidInputs.forEach((input) => input.classList.remove("is-invalid")); // Qırmızı sərhədləri sil
}

// Formun düzgünlüyünü yoxlayan funksiya
function isValidForm() {
  const errorMessages = document.querySelectorAll(".text-danger");
  return Array.from(errorMessages).every((error) => error.textContent === "");
}
