async function loadUsers() {

    const tableBody =
        document.getElementById("userTableBody");

    const tableMessage =
        document.getElementById("tableMessage");


    try {

        // Call Spring Boot

        const response =
            await fetch("/api/users");


        if (!response.ok) {

            throw new Error(
                "Failed to get users"
            );

        }


        // Convert response to JSON

        const users =
            await response.json();


        console.log(
            "Users received:",
            users
        );


        // Clear existing rows

        tableBody.innerHTML = "";


        // Check if no users

        if (users.length === 0) {

            tableMessage.innerText =
                "No users registered yet.";

            return;

        }


        tableMessage.innerText = "";


        // Add users to table

        users.forEach(function(user) {


            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${user.id}
                </td>

                <td>
                    ${user.mobileNumber}
                </td>

                <td>
                    ${user.email}
                </td>

                <td>
                    ${user.birthday}
                </td>

                <td>
                    ${user.name}
                </td>

                <td>
                    ${user.username}
                </td>

            `;


            tableBody.appendChild(row);

        });


    } catch (error) {

        console.error(error);


        tableMessage.innerText =
            "Unable to load users.";

    }

}


// Load users automatically
// when page opens

loadUsers();