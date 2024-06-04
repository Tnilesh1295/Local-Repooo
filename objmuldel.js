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

    // Store user 
    localStorage.setItem(email, JSON.stringify(user));

    // Update the user list display
    displayUsers();
}

// Function to display users in the unordered list
function displayUsers() {
    console.log("Displaying users...");
    var userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Clear existing list

    // Loop through all keys in local storage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var user = JSON.parse(localStorage.getItem(key));

        // Create list items for each user
        var listItem = document.createElement('li');
        listItem.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;

        // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            deleteUser(key);
        };

        // Append delete button to list item
        listItem.appendChild(deleteButton);

        // Append list item to user list
        userList.appendChild(listItem);
    }
}


// Function to delete user from local storage and update display
function deleteUser(email) {
 
    localStorage.removeItem(email);

    // Update 
    displayUsers();
}

// Initial call to display users on page load
document.addEventListener('DOMContentLoaded', displayUsers);

module.exports = handleFormSubmit;
