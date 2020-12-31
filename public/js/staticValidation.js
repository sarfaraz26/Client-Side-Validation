//Login

let errorMsgs = document.getElementsByClassName('text-danger');
let logForm = document.getElementById('form1');
    let logUsername = document.getElementById('login-username');
    let logPassword = document.getElementById('login-password');

    logForm.addEventListener('submit',function(e){      
        if(logUsername)
        {
            if(logUsername.value.length === 0)
            {
                errorMsgs[0].innerHTML = "Username cannot be empty";
                logUsername.style.border = "2px solid red";
                e.preventDefault();
            }
            else if(logUsername.value.length < 6)
            {
                errorMsgs[0].innerHTML = "Username contain atleast 6 characters";
                logUsername.style.border = "2px solid red";
                e.preventDefault();   
            }
            else
            {
                errorMsgs[0].innerHTML = "";
                logUsername.style.border = "2px solid lightblue";   
            }
        }  

        
        if(logPassword)
        {
            if(logPassword.value.length === 0)
            {
                errorMsgs[1].innerHTML = "Password cannot be empty";
                logPassword.style.border = "2px solid red";
                e.preventDefault();
            }
            else if(logPassword.value.length < 8)
            {
                errorMsgs[1].innerHTML = "Password must contain atleast 8 characters";
                logPassword.style.border = "2px solid red";
                e.preventDefault();   
            }
            else
            {
                errorMsgs[1].innerHTML = "";
                logPassword.style.border = "2px solid lightblue";   
            }
        }
    })

