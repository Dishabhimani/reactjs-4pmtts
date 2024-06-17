// login
function lg()
{
    var email=document.getElementById("email").value;
    var pwd=document.getElementById("password").value;
    if(email=='brijesh@gmail.com' && pwd=='brij123')
        {

            Swal.fire({
                title: "wow",
                text: "You are Logged In Suuccessfully",
                icon: "success"
              });
         
              window.location='dashboard.html';
        }
        else 
        {
            
            Swal.fire({
                title: "Oh",
                text: "Your email & Password are Incorrect try again",
                icon: "error"
              });
        }
}



// create a logout function 

 function logg()
 {
    Swal.fire({
        title: "wow",
        text: "You are Logout  Successfully",
        icon: "success"
      });
 
      window.location='index.html';
 }