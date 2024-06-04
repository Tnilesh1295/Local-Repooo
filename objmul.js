function handleFormSubmit(event) {
    event.preventDefault();

    var username = event.target.username.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;

    var user = {
        username: username,
        email: email,
        phone: phone
    };

    // Store user details using email as the key
    localStorage.setItem(email, JSON.stringify(user));

    // Update the user list display
    displayUsers();
}

// Function to display users in the unordered list
function displayUsers() {
    var userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear existing list

    // Loop through all keys in local storage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var user = JSON.parse(localStorage.getItem(key));

        // Create list items for each user
        var listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
        userList.appendChild(listItem);
    }
}

// Initial call to display users on page load
document.addEventListener('DOMContentLoaded', displayUsers);

module.exports = handleFormSubmit;

