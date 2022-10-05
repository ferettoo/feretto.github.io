function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let surname = document.forms["myForm"]["surname"].value;
    let email = document.forms["myForm"]["email"].value;
    let radio = document.forms["myForm"]["color"].value;
    let verify;

    if (name == "") {
        alert("You need to put your name.");
        verify = false;
    }
    if (surname == "") {
        alert("You need to put your surname.");
        verify = false;
    }
    if (email == "") {
        alert("You need to put your email.");
        verify = false;
    }

    var i = 0;
    while (!verify && radio.length) {
        if (radio[i].checked) {
            verify = false;
        }
        i++;
    }
    if (!verify) {
        alert("You have to select one of the options.");
    }
    return verify;
}

let verify = validateForm();

co