// Button Click Event
document.getElementById("changeTextBtn").addEventListener("click", function () {
  this.textContent = "You changed my text! 🎉";
});

// Hover Effect
document.getElementById("hoverBtn").addEventListener("mouseover", function () {
  this.style.backgroundColor = "#ff6347"; // Tomato color on hover
});
document.getElementById("hoverBtn").addEventListener("mouseout", function () {
  this.style.backgroundColor = "#4CAF50"; // Original color when mouse leaves
});

// Keypress Detection
document
  .getElementById("keypressInput")
  .addEventListener("keypress", function (event) {
    console.log(`Key pressed: ${event.key}`);
  });

let timer;
document.getElementById("hoverBtn").addEventListener("dblclick", function () {
  document.getElementById("secretImage").style.display = "block";
});

// Long press detection (holding down the button for more than 2 seconds)
document.getElementById("hoverBtn").addEventListener("mousedown", function () {
  timer = setTimeout(function () {
    alert("You held the button long enough for the secret action!");
  }, 2000);
});
document.getElementById("hoverBtn").addEventListener("mouseup", function () {
  clearTimeout(timer);
});

// Interactive Image Gallery
let currentImageIndex = 0;
const images = [
  "https://images.pexels.com/photos/11739438/pexels-photo-11739438.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load/200?text=Image+1",
  "https://images.pexels.com/videos/30393112/4k-nature-4k-nature-video-4k-vertical-4k-video-30393112.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load/200?text=Image+2",
  "https://images.pexels.com/photos/26181423/pexels-photo-26181423/free-photo-of-monkey-sitting-with-food.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load/200?text=Image+3",
];
document.getElementById("nextImageBtn").addEventListener("click", function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = `<img src="${images[currentImageIndex]}" alt="Gallery Image">`;
});

// Validate on form submit
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const validationMessage = document.getElementById("validationMessage");

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      validationMessage.textContent = "Please enter a valid email address.";
      return;
    }

    // Password Validation
    if (password.length < 8) {
      validationMessage.textContent = "Password must be at least 8 characters.";
      return;
    }

    validationMessage.textContent = "Form submitted successfully!";
    validationMessage.style.color = "green";
  });
