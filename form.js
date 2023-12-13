let username = document.querySelector("#username");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let email = document.querySelector("#email");
let form = document.querySelector("#form");

function showerrow(input,massage){
  const formcControl = input.parentElement;
  formcControl.className = "form-control error";
  const small = formcControl.querySelector("small");
  small.textContent=massage;
  
}


function showsuccess(input,massage){
   const formcControl = input.parentElement;
   formcControl.className="form-control success";
   const small = formcControl.querySelector("small");
   small.textContent=massage;
   
}

function chackinput(input,min,mix){
    if(input.value.length < min){
       showerrow(input,`${namechack(input)} must be at least ${min} characters`);
    }else if(input.value.length > mix){
       showerrow(input,`${namechack(input)} must be at least ${min} characters`);
    }else{
       showsuccess(input);
    }
 }

function namechack(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }
  


function emailchack(input){
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(re.test(input.value)){
      showsuccess(input)
   }else{
      showerrow(input,"Your Email is Invled")
   }

}




function chackpass(input,input2){

  if(input.value == ''){ 
    showerrow(input," Password is  required");
 
  }
   if(input2.value == ''){
    showerrow(input2," Password is  required");
  }else{ 

   if(input.value !== input2.value){
      showerrow(input2,"your Password is not same");
   }else if(input.value == input2.value){
    showsuccess(input);
    showsuccess(input2);
   }
}
}
 form.addEventListener("submit",(e)=>{
   e.preventDefault();
   
 chackinput(username,3,8);
 chackinput(password,6,18);
 chackinput(password2,"your password is not mach");
 emailchack(email);
 chackpass(password,password2);
  

});