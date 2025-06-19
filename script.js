// Fake user data (for simulation)
const users = [
    { username: 'muhaned', password: 'pass1' },
  ];
  
  // Function to handle fake login
  const handleLogin = (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const foundUser = users.find(user => user.username === username && user.password === password);
    
    if (foundUser) {
      alert('Login successful! Redirecting to Home Page.');
      // Perform redirection to the home page here
      window.location.href = 'index.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };
  
  // Function to handle fake registration
  const handleRegister = (event) => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    // Simulate storing the new user in the users array
    users.push({ username, password });
  
    alert('Registration successful! You can now login.');
  };
  
  // Event listeners for forms
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
  