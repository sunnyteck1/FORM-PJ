// select style
document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("loginFormContainer");
    const form = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitButton = document.getElementById("submitBtn");
    const message = document.getElementById("message");

    // Container Style
    formContainer.style.fontFamily = "Arial, sans-serif";
    formContainer.style.display = "flex";
    formContainer.style.justifyContent = "center";
    formContainer.style.alignItems = "center";
    formContainer.style.minHeight = "100vh";
    formContainer.style.backgroundColor = "wheat";


    // Form   Style 
    form.style.backgroundColor = "lightblue";
    form.style.padding = "30px";
    form.style.borderRadius = "8px";
    form.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    form.style.width = "300px";
    form.style.textAlign = "center";

    // Heading   Style
    form.querySelector("h2").style.color = "#0056b3";
    form.querySelector("h2").style.marginBottom = "30px";

    //  labels  Style
    const labels = form.querySelectorAll("label");
    labels.forEach(label => {
        label.style.display = "block";
        label.style.textAlign = "left";
        label.style.marginBottom = "5px";
        label.style.color = "#555";
    });

    // Input fields  Style
    usernameInput.style.width = "calc(100% - 20px)";
    usernameInput.style.padding = "10px";
    usernameInput.style.marginBottom = "10px";
    usernameInput.style.border = "1px solid #ddd";
    usernameInput.style.borderRadius = "5px";

    passwordInput.style.width = "calc(100% - 20px)";
    passwordInput.style.padding = "10px";
    passwordInput.style.marginBottom = "20px";
    passwordInput.style.border = "1px solid #ddd";
    passwordInput.style.borderRadius = "5px";

    // Submit button  Style
    submitButton.style.backgroundColor = "#007bff";
    submitButton.style.color = "white";
    submitButton.style.padding = "10px 15px";
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = "4px";
    submitButton.style.cursor = "pointer";
    submitButton.style.fontSize = "18px";

    // Add hover effect to button
    submitButton.onmouseover = function () {
        this.style.backgroundColor = "#0056b3";
    };
    submitButton.onmouseout = function () {
        this.style.backgroundColor = "#007bff";
    };

    // Optional: Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
        const username = usernameInput.value;
        const password = passwordInput.value;

    });
    //simulate login success
    document.getElementById("loginFormContainer").onsubmit = function (event) {

        alert("Login  Successful");
        document.getElementById("message").innerText = "Login Successful,you're been redirected....!";
    };

});


