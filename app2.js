
    /*if(!userName.value){
        userName.style.border = "2px solid red";
        return false;
    }
    return true;*/
      
function validate()
{
    var RegularName=new RegExp('[A-Za-z]{2,10}');
    var userName=document.getElementById("name").value;
    var check1=RegularName.exec(userName);
    var checkName;
   if(check1===null){
    alert("Use only letters for name");
   }
   else     
    { checkName=true;}



   var RegularPassword=new RegExp('[A-Za-z0-9]{6,30}');
   var userPassword=document.getElementById("password").value;
   var check2=RegularPassword.exec(userPassword);
   var checkPassword=false;
  
   if(check2===null)
   {alert("Password must have at least 6 symbols, but not more than 30")
   }else{
       checkPassword =true;
   }
  
   
    var RegularEmail=new RegExp('^[A-Za-z0-9]*@[a-z]');
    var userEmail=document.getElementById("email").value;
    var check3=RegularEmail.exec(userEmail);
    var checkEmail;
   if(check3===null){
    alert("Your e-mail should something like markus@ukr.net")
   }
   else     	
    { checkEmail=true;}

    
   if(checkName==true && checkPassword==true && checkEmail==true){
       alert("Thank you for registration");
   }
 
    
};

var button = document.getElementById('submit');
button.addEventListener("click",validate);

 /*   userName.addEventListener('keyup', NameLight);
    userEmail.addEventListener('keyup', EmailLight);
    userPassword.addEventListener('keyup', PassLight);
    
    function NameLight(){
        var Name_ch = checkName();
        userName.style.outline="none";
        if(Name_ch==false)
            userName.style.border="2px solid red";
        else if(Name_ch==true)
            userName.style.border="2px solid green";
    }
     function EmailLight(){
        var Email_ch = checkEmail();
        userEmail.style.outline="none";
        if(Email_ch==false)
            userEmail.style.border="2px solid red";
        else if(Email_ch==true)
            userEmail.style.border="2px solid green";
    }
     function PassLight(){
        var Pass_ch = checkPassword();
        userPassword.style.outline="none";
        if(Pass_ch==false)
            userPassword.style.border="2px solid red";
        else if(Pass_ch==true)
            userPassword.style.border="2px solid green";
    }
*/
























