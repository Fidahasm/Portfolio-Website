function SendMail(){
    if(    document.getElementById("name").value.length>0 &&
        document.getElementById("emial").value.length>0 &&
        document.getElementById("subject").value.length>0 &&
        document.getElementById("message").value.length>0 )
{
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("emial").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
   const serviceID="service_t0l92eo";
   const templateID="template_tt1n3bc";

   emailjs.send(serviceID,templateID,params)
   .then(
    res=>{
        document.getElementById("name").value="",
        document.getElementById("emial").value="",
        document.getElementById("subject").value="",
        document.getElementById("message").value="";
        console.log(res);
        alert("Your mail send succesfully")
    }
   )
   .catch((err)=>console.log(err)); 
    
}
else{
    alert("Please fill all the fields")
}
   
}

