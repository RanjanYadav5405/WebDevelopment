// 4. The Password Validator:
// You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validatePassword(password){
    if(password.length < 8){
        return false;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;

    for (let char of password){
        if(/[A-Z]/.test(char)){
            hasUpperCase = true;
        }
        else if(/[a-z]/.test(char)){
            hasLowerCase = true;
        }
        else if(/\d/.test(char)){
            hasDigit = true;
        }
        

        if(hasUpperCase && hasLowerCase && hasDigit){
            return true;
        }
    }

    return false
}

let password1 = "Password1";
let password2 = "password";
let password3 = "Ranjan24";

console.log(validatePassword(password1))
console.log(validatePassword(password2))
console.log(validatePassword(password3))