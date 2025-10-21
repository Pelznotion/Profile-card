// Dynamic time on Home page
const timeEl = document.getElementById("current-time");
if (timeEl) {
  timeEl.textContent = Date.now();
}

// Form validation on Contact page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const success = document.getElementById("success");

    const clearErrors = () => {
      document
        .querySelectorAll(".error")
        .forEach((el) => (el.textContent = ""));
      success.textContent = "";
    };

    clearErrors();

    if (name.value.trim() === "") {
      document.getElementById("error-name").textContent = "Name is required.";
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("error-email").textContent =
        "Enter a valid email address.";
      isValid = false;
    }

    if (subject.value.trim() === "") {
      document.getElementById("error-subject").textContent =
        "Subject is required.";
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent =
        "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      success.textContent = "✅ Message sent successfully!";
      form.reset();
    }
  });
});
