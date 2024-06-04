function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Collect the input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create an object with the collected values
    const userDetails = {
        username: username,
        email: email,
        phone: phone
    };

    // Store the object in local storage as a JSON string
    localStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Inform the user that their details have been saved
    alert('User details have been saved successfully!');

    let myobj = JSON.parse(localStorage.getItem(userDetails.name));
}