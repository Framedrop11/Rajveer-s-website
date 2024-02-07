const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = {
    'mriganka@gmail.com': 'mriganka','rajkhowa@gmail.com':'rajkhowa','admin@gmail.com':'admin123'
  };

  if (users[email] === password) {
    window.location.href = 'second.html';
  } else {
    errorMsg.textContent = 'Invalid email or password.';
  }
});