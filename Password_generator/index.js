document.getElementById("btn").addEventListener("click",function(){

        let passwordLength = document.getElementById("passwordLength").value;
        let includeLowercase = document.getElementById("includeLowercase");
        let includeUppercase = document.getElementById("includeUppercase");
        let includeNumbers = document.getElementById("includeNumbers");
        let includeSymbols = document.getElementById("includeSymbols");
        const result = document.getElementById("result");


        passwordLength = Number(passwordLength);

      includeLowercase = includeLowercase.checked;
      includeUppercase = includeUppercase.checked;
      includeNumbers = includeNumbers.checked;
      includeSymbols = includeSymbols.checked;
        
        const password = generatePassword(passwordLength,
                                        includeLowercase,
                                        includeUppercase,
                                        includeNumbers,
                                        includeSymbols,
                                        result);



        if(password){
        result.textContent =  `Your generated password is: ${password}`;
        }
});

function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols,result){
    
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars :"";
    allowedChars += includeUppercase ? uppercaseChars :"";
    allowedChars += includeNumbers ? numberChars :"";
    allowedChars += includeSymbols ? symbolChars :"";
    
    if(length == ""){
        result.textContent = "Enter the required length for your password don't leave it empty."
        return "";
    }

    if(length <= 0){
        result.textContent = "Password length must be at least 1.";
        return "";
    }
    if(allowedChars.length === 0){
        result.textContent = "At least 1 set of character needs to be selected.";
        return "";
    }
    
    for(i = 0 ; i < length; i++){
        const randomIndex = Math.floor(Math.random() *allowedChars.length);
        password += allowedChars[randomIndex];
    }

    
    return password;
}

