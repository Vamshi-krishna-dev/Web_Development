//get the form element
const form = document .getElementById("contactForm")

//listen for form submission
form.addEventListener("submit",function (event) {

    //Prevent form from submitting
    event.preventDefault();

    //clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent="";
    document.getElementById("successMessage").textContent="";

    //Get Input Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    //Name Validation
    if (name == "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    //Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == ""){
         document.getElementById("emailError").textContent = "Email is required.";
         isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please eneter a valid email address.";
        isValid = false;
    }

    //Message Validation
    if (message == "") {
        document.getElementById("messageError").textContent = "Message is required.";
        isValid = false;
    }

    //Success
    if (isValid) {
        document.getElementById("successMessage").textContent = 
            "Form submitted successfully";
        
        //clear the form
        form.reset();
    }

})