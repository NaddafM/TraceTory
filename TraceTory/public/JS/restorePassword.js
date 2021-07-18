$(document).ready(function(){
    //Change the navbar title dynamicly
    $('.header .title').html("Restore Password");
});

let MsgEror="";

document.querySelector("#reset_password_button").addEventListener("click", RestorePassword);
function RestorePassword()
{
    
    let str= document.getElementById("user_mail").value;   
    
    if(isMailVaild(str))
    {
        alert("קישור לאיפוס סיסמה נשלח\n"+"למייל: "+str);
    }
    else
    {
        alert(MsgEror);
    }
}

function isMailVaild(str)
{    
    const regex= /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    
    let bool=true;

    if(str.length==0)
    {
        MsgEror+="Mail Field Is Empty";
        bool=false;
        return bool;
    }
    if(!(regex.test(str)))
    {
        if(MsgEror.length>0)
            MsgEror+="\n";
        MsgEror+="NOT Valid Mail";
        bool=false;
        return bool;
    }
    return bool;    
}