$(document).ready(function(){
    //Change the navbar title dynamicly
    $('.header .title').html("Log In");
});

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

let MsgEror="";

document.querySelector("#login_button").addEventListener("click", validtionMailAndPassword);
function validtionMailAndPassword()
{
    let email= document.getElementById("user_mail").value;   
    let password1= document.getElementById("user_password").value;  

    isMailVaild(email); 

    if(password1.length<8)
    {
        if(MsgEror.length>0)
            MsgEror+="\n";
        MsgEror+="NOT valid password, need 8 letters or more";
    } 
    if(MsgEror.length>0){
        alert(MsgEror);
    }else{
        alert("succes");
    }     
}


function isMailVaild(email)
{    
    const regex= /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
   

    if(email.length==0)
    {
        MsgEror+="Mail Field Is Empty";
        return MsgEror;
    }
    if(!(regex.test(email)))
    {
        if(MsgEror.length>0)
            MsgEror+="\n";
        MsgEror+="NOT Valid Mail";
        return MsgEror;
    }  
}
