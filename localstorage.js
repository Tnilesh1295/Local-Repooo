//console.log('hi');
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Collect the input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Store the values in local storage
    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);

    // You can add a message or redirect the user after saving the data
    alert('User details have been saved successfully!');
});