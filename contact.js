// get the contact form and feedback message
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Handle submission
contactForm.addEventListener("submit", function(event) {

    //prevent page from refreshing
    event.preventDefault();
    formMessage.textContent =
        "Thank you for completing our contact form.";
    contactForm.reset();
});