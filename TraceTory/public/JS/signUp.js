$(document).ready(function(){
    //Change the navbar title dynamicly
    $('.header .title').html("Sign Up");
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


function isMailVaild(str)
{    
    const regex= /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
   

    if(str.length==0)
    {
        MsgEror+="Mail Field Is Empty";
        return MsgEror;
    }
    if(!(regex.test(str)))
    {
        if(MsgEror.length>0)
            MsgEror+="\n";
        MsgEror+="NOT Valid Mail";
        return MsgEror;
    }
        
}

document.querySelector("#SignUp_button").addEventListener("click", validtionMailAndPassword);
function validtionMailAndPassword()
{
    let name= document.getElementById("user_name").value; 
    let str1= document.getElementById("user_mail").value;   
    let str2= document.getElementById("confirm_user_mail").value;
    let password1= document.getElementById("user_password").value;   
    let password2= document.getElementById("confirm_user_password").value;
    
    isMailVaild(str1);

    if(name.length<2)
    {
        if(MsgEror.length>0)
            MsgEror+="\n";
        MsgEror+="NOT valid name, need 2 letters or more";
    }    
   
    if(password1.length<8)
    {
        if(MsgEror.length>0)
            MsgEror+="\n";
        MsgEror+="NOT valid password, need 8 letters or more";
    }

    if(str2.length!=0)
        checkEquals2Strings(str1,str2,true);
    else{
        if(MsgEror.length>0)
             MsgEror+="\n";
        MsgEror+="Verification of Mail not correct";
    }

    if(password2.length!=0)
        checkEquals2Strings(password1,password2,false);
    else{
        if(MsgEror.length>0)
             MsgEror+="\n";
        MsgEror+="Verification of Password not correct";
    }

    if(MsgEror.length==0)
        alert("succes");
    else
        alert(MsgEror);    
}

function checkEquals2Strings(s1,s2,c)
{     
    if(s1.localeCompare(s2)==0)
    {
        return true;
    }
    else
    {        
        if((c==true))
        {
            if(MsgEror.length>0)
                MsgEror+="\n";
            MsgEror+="Verification of Mail not correct";
        }
        if((c==false))
        {
            if(MsgEror.length>0)
                MsgEror+="\n";
            MsgEror+="Verification of Password not correct";
        }
        return false;
    }        
}