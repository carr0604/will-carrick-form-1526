// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let btn = document.getElementById("submit");
let fName = document.getElementById("textbox");
let email = document.getElementById("email");
let msg = document.getElementById("message-area");
let form  = document.querySelector("form");

    
    
      
// Declare variable that will 
// store regular expression for email

let emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;



// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function validateForm(){
     
    console.clear();
    
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    var formData = {};
    
    // Declare array that will store the errors
    var error = [];



   
     /*+-----------+    
    | FULL NAME |
    +-----------+*/
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    
    if(fName.value !== ""){
        var fullname = fName.value;
        formData.name = fullname;
    } else {
        var fnameError = "Needs name";
        error.push(fnameError);
    }
    

    
    /*+-------+    
    | EMAIL | 
    +-------+*/
    // Check if email is not empty.
       // Check if email is valid. (COMPARE 'regex or pattern' to email)
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
    
    if(email.value) {
        
        if(emailFormat.test(email.value)){
            formData.emailValue = email.value;
        }else{
            error.push("Email is Invalid!");
        }  
    } else {
        error.push("Email is Empty!");
    }
    
    
   
        
     /*+---------+    
    | MESSAGE | 
    +---------+*/
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.
        
    if(msg.value !== ""){
        var message = msg.value;
        formData.message = message;
    } else {
        var msgError = "Please write a message!";
        error.push(msgError);
    }

        
    
    /*+-----------------+
    | FEEDBACK/ERRORS |
    +-----------------+*/
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    
    if (error.length > 0) {
        console.log("ERROR: ", error);
    } else {
        console.log(formData);
    }
    
    
    
    if(formData.message !== "" && formData.emailValue !== "" && formData.name !== ""){
        form.reset();
    }
    
// Close your function here
}

// Register your form to "click" event.
btn.addEventListener("click", validateForm);