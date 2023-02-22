function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["Email"].value;
    let z = document.forms["myForm"]["password"].value;

    if (!/^[A-Za-z0-9]*$/.test(x)) {
        console.log("Form submission failed. Must contain only letters and numbers.");
        return false;
    } else if (y == 0 ) {
        console.log("Form submission failed. Must not be empty.");
        return false;
    } else if (!(y = /\S+@\S+\.\S+/)){
        console.log("Form submission failed. Must follow correct email format.");
        return false;
    } else if (8 <= z){
        console.log("Form submission failed. Should be 8 characters and more.");
        return false;
    } else {
        console.log("Form submitted successfully.");
        return false; //Included this just so it prints my console log.
    }
};