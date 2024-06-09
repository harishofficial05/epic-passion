


function submit(){
    
    const password=document.getElementById("password");
    const email=document.getElementById("1email");
    
        
        const passwordvalue=password.value.trim();
        const emailvalue=email.value.trim();
     
        if (usernamevalue===''){
            alert ('username required');
        }if(passwordvalue===''){
            alert ("Fill Every Input");
        }if(emailvalue===''){
            alert ("Fill Every Input");
        }
        else{
            alert("REGISTERED SUCCESFULLY...!");
        }
}
function submit2(){
    const username=document.getElementById("username2");
    const password=document.getElementById("password2");
    const username1=document.getElementById("username");
        const usernamevalue=username.value.trim();
        const usernamevalue1=username1.value.trim();
        const passwordvalue=password.value.trim();
        if (usernamevalue===''){
        
                alert ('username required');
        }else{
            if(passwordvalue===''){
                alert('Fill every input');
            }else{
                alert("login succesful...click ok button");
                window.location.assign("./index.html");
                }
        }
        
        if(usernamevalue1===''){
                alert ('username required');
        }else{
            alert("Your Login has been successful!!!");
            }
        
        
    }
function signup(){
    const signupblock=document.getElementById("signup");
    const signinblock=document.getElementById("signin");
    signupblock.style.display="block";
    signinblock.style.display="none";
}
function signin(){
    const signupblock=document.getElementById("signup");
    const signinblock=document.getElementById("signin");
    signupblock.style.display="none";
    signinblock.style.display="block";
}
function update(){
    alert("Your request has been submitted...")
}


function placeorder(){
    alert("Hi, Your Order Placed Successfully!!!");
}

