   
   function sendEmail() {

     var params ={
        name: document.getElementById("myName").value,
        email: document.getElementById("myEmail").value,
        message: document.getElementById("myMessage").value

    
     };
     const serviceID ="service_ydftyfp";
     const templateID = "template_2lup10g";

     console.log("successfully loaded ");
  
     emailjs.send(serviceID,templateID,params)
     .then(
      res=>{
          document.getElementById("myName").value = "";
          document.getElementById("myEmail").value = "";
          document.getElementById("myMessage").value = "";
  
          console.log(res);
          alert("your message was sent successfull")
      })
      .catch((err) => console.log(err))
    
   }

      
  
  //  function sendMail() {
  //    var name = document.getElementById("myName").value  
  //    var email = document.getElementById("myEmail").value
  //    var message = document.getElementById("myMessage").value


  //    console.log(name)
  //    console.log(email)
  //    console.log(message)

  //  } 

  