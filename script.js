const form = document.getElementById('newsletterForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');
const subscribeBtn = document.getElementById('subscribeBtn');

function validateEmail(emailValue) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(emailValue);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  let isValid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  successMessage.classList.remove('show');

  if (fullName.value.trim() === '') {
    nameError.textContent = 'Full name is required.';
    isValid = false;
  }

  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Thank you for subscribing!';
    successMessage.classList.add('show');

    // Optional enhancements
    localStorage.setItem('subscriberName', fullName.value.trim());
    localStorage.setItem('subscriberEmail', email.value.trim());

    subscribeBtn.disabled = true;

    setTimeout(() => {
      successMessage.classList.remove('show');
      subscribeBtn.disabled = false;
      form.reset();
    }, 4000);
  }
});