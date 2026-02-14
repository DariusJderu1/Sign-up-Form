const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm-password");
const passwordParagraph = document.getElementById("password-paragraph");
const confirmPasswordParagraph = document.getElementById("confirm-password-paragraph");
let passwordText = "", passwordConfirmText = "";


passwordInput.addEventListener("input", () => {

    passwordText = passwordInput.value;
    
    //if the password is not long enough
    if(parseInt(passwordText.length) < 8)
        passwordParagraph.innerText = "Password requires minimum 8 charecters";
    else 
        passwordParagraph.innerText = "";
});

passwordConfirm.addEventListener("input", () => {

    passwordConfirmText = passwordConfirm.value;

    if(passwordConfirmText != passwordText) {

        confirmPasswordParagraph.innerText = "Password did not match";
        passwordConfirm.style.borderColor = "red";
    }
        

    else {

        confirmPasswordParagraph.innerText = "";
        passwordConfirm.style.borderColor = "";
    }
        
});