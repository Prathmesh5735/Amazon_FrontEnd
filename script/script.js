document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        name: name,
        email: email,
        password: password
    };

    // Get users from local storage or initialize empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if email already exists
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('Email already exists. Please use a different email.');
    } else {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully.');
        document.getElementById('createAccountForm').reset();
    }
});

document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Welcome back, ${user.name}!`);
        document.getElementById('signInForm').reset();
    } else {
        alert('Invalid email or password.');
    }
});
