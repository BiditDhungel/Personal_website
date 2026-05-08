// Hire Me Button
document
  .getElementById("hireBtn")
  .addEventListener("click", function () {

    alert("Thanks for visiting my portfolio!");

});

// Contact Form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Message Sent Successfully!");

    this.reset();

});