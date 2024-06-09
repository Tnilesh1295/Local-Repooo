
function handleFormSubmit(event) {
    event.preventDefault();

    var expAmt = event.target.expAmt.value;
    var des = event.target.des.value;
    //
   // var category = event.target.category.value;
    var e = document.getElementById("reasonid");
    var category = e.value;

    var user = {
        expAmt: expAmt,
        des: des,
        category: category
    };

    // Store user details using email as the key
    localStorage.setItem(des, JSON.stringify(user));

    // Update the user list display
    displayUsers();
}
function displayUsers() {
    var userList = document.getElementById('user-list');
   userList.innerHTML='';
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var user = JSON.parse(localStorage.getItem(key));

        // Create list items for each user
        var listItem = document.createElement('li');
        listItem.textContent = user.expAmt + user.des + user.category ;
       //userList.appendChild(listItem);

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.onclick = function() {
            deleteUser(key);
        };
        var editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            editUser(key, user);
        };
            listItem.appendChild(deleteButton);
            listItem.appendChild(editButton);
            // Append list item to user list
            userList.appendChild(listItem);
        
    }
}
function editUser(des, user) {
    // Remove user from local storage
    localStorage.removeItem(des);

    // Populate input fields with existing values
    document.getElementById('ea').value = user.expAmt;
    document.getElementById('explain').value = user.des;
    document.getElementById('reasonid').value = user.category;

    // Update the user list display
    //displayUsers();
}

// Function to delete user from local storage and update display
function deleteUser(des) {
    // Remove user from local storage
    console.log("Delete users...");
    localStorage.removeItem(des);

    // Update the user list display
    displayUsers();
}

// Initial call to display users on page load
document.addEventListener('DOMContentLoaded', displayUsers);

//module.exports = handleFormSubmit;
