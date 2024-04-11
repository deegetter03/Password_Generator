const passwordBox = document.getElementById("password");
const length = 10;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+|}{[]></-=?";

const allchar = uppercase + lowercase + number + symbol;

//for generating password
function createpassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }
    passwordBox.value = password;
}

//for coping the password
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");  
    //Executes a command on the current document, current selection, or the given range.
}