

document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = "https://crudcrud.com/api/1012bbc78cd841fe96471500afff587d/app";

        const form = document.getElementById("add-form");
        const recordsTable = document.querySelector("#records-table tbody");
        const searchInput = document.getElementById("search-input");
        let editingRecordId = null;

        // Load initial data
        loadRecords();

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;

            if (editingRecordId) {
                updateRecord(editingRecordId, name, email);
            } else {
                addRecord(name, email);
            }
        });


    function filterRecord() {
        const textBoxValue = document.getElementById("search").value;
        filterRecords(textBoxValue);
    }
        function loadRecords() {
            axios.get(apiUrl)
                .then(response => {
                    response.data.forEach(record => {
                        addRecordToTable(record);
                    });
                })
                .catch(error => console.error("Error loading records:", error));
        }

        function addRecord(name, email) {
            const record = { name, email };
            axios.post(apiUrl, record)
                .then(response => {
                    addRecordToTable(response.data);
                    form.reset();
                })
                .catch(error => console.error("Error adding record:", error));
        }

        function updateRecord(id, name, email) {
            const record = { name, email };
            axios.put(`${apiUrl}/${id}`, record)
                .then(response => {
                    const row = document.querySelector(`#records-table tbody tr[data-id="${id}"]`);
                    if (row) {
                        row.querySelector(".name").textContent = response.data.name;
                        row.querySelector(".email").textContent = response.data.email;
                    }
                    form.reset();
                    editingRecordId = null;
                })
                .catch(error => console.error("Error updating record:", error));
        }

        function addRecordToTable(record) {
            const row = document.createElement("tr");
            row.setAttribute("data-id", record.id);
            row.innerHTML = `
            <td class="name">${record.name}</td>
            <td class="email">${record.email}</td>
            <td>
                <button onclick="editRecord(${record.id})">Edit</button>
                <button onclick="deleteRecord('${record._id}')">Delete</button>
            </td>
        `;
            recordsTable.appendChild(row);
        }

        function editRecord(id) {
            axios.get(`${apiUrl}/${id}`)
                .then(response => {
                    document.getElementById("name").value = response.data.name;
                    document.getElementById("email").value = response.data.email;
                    editingRecordId = id;
                })
                .catch(error => console.error("Error fetching record:", error));
        }

    window.deleteRecord= function(id) {
            axios.delete(`${apiUrl}/${id}`)
                .then(() => {
                    const row = document.querySelector(`#records-table tbody tr[data-id="${id}"]`);
                    if (row) row.remove();
                    window.location.reload();
                    loadRecords();
                })
                .catch(error => console.error("Error deleting record:", error));
        }

        function filterRecords(searchTerm) {
            const rows = recordsTable.querySelectorAll("tr");
            rows.forEach(row => {
                const name = row.querySelector(".name").textContent.toLowerCase();
                const email = row.querySelector(".email").textContent.toLowerCase();
                if (name.includes(searchTerm) || email.includes(searchTerm)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        }
    });


   

