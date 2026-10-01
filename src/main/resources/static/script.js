const signupForm = document.getElementById("signupForm");

const message = document.getElementById("message");


signupForm.addEventListener("submit", async function(event) {

    event.preventDefault();


    // Get values from form

    const mobileNumber =
        document.getElementById("mobileNumber").value;

    const email =
        document.getElementById("email").value;

    const birthday =
        document.getElementById("birthday").value;

    const name =
        document.getElementById("name").value;

    const username =
        document.getElementById("username").value;


    // Create JSON object

    const userData = {

        mobileNumber: mobileNumber,

        email: email,

        birthday: birthday,

        name: name,

        username: username

    };


    console.log("Sending data:");

    console.log(userData);


    try {

        // Send data to Spring Boot

        const response = await fetch("/api/users", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(userData)

        });


        // Check response

        if (!response.ok) {

            throw new Error(
                "Failed to save user"
            );

        }


        // Get saved user

        const savedUser =
            await response.json();


        console.log(
            "Saved user:",
            savedUser
        );


        // Show success message

        message.innerText =
            "Signup successful!";

        message.style.color =
            "green";


        // Clear form

        signupForm.reset();


    } catch (error) {

        console.error(error);


        message.innerText =
            "Error while saving user.";

        message.style.color =
            "red";

    }

});