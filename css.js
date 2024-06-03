const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');


form.addEventListener('submit',function(event) {
    event.preventDefault();
    const addfood = document.getElementById('fruit-to-add');
    const newli = document.createElement('li');
    newli.innerHTML = addfood.value + '<button class="delete-btn">x</button>' +'<button class="edit">Edit</button>';
    fruits.appendChild(newli);
})
fruits.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const foodel = event.target.parentElement;
        fruits.removeChild(foodel);
    }
})

const listItems = document.querySelectorAll("li");

listItems.forEach(li => {
    // Create the edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";

    // Insert the edit button after the delete button
    const deleteButton = li.querySelector(".delete-btn");
    if (deleteButton) {
        deleteButton.insertAdjacentElement("afterend", editButton);
    }
});

