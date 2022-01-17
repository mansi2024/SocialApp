

$(document).ready(function(){   
 
    // add event listener on the login button
    
    $("#facebook").click(function(){
   
       facebookLogin();
   
      
    });
   
    // add event listener on the logout button
   
    $("#logout").click(function(){
   
      $("#logout").hide();
      $("#facebook").show();
      $(".status").hide();
      $(".card").show();
      facebookLogout();
   
    });
   
   
    function facebookLogin()
    {
      FB.getLoginStatus(function(response) {
          console.log(response);
          statusChangeCallback(response);
      });
    }
   
    function statusChangeCallback(response)
    {
        console.log(response);
        if(response.status === "connected")
        {
          console.log("Authenticated");
           $(".status").show();
           $(".card").hide();
           $("#logout").show(); 
           fetchUserProfile();
        }
        else{
          console.log("Not Authenticated");
            // Logging the user to Facebook by a Dialog Window
            facebookLoginByDialog();
        }
    }
   
    function fetchUserProfile()
    {
      console.log('Welcome!  Fetching your information.... ');
      FB.api('/me?fields=id,picture,name,email,gender,birthday', function(response) {
        console.log(response);
        console.log('Successful login for: ' + response.name);
        $(".card").hide();
        var picture_url = response.picture.data.url;
        $("#image2").attr('src',picture_url);
       
        $("#name2").text(response.name)
        $("#email2").text(response.email);
        $("#birthday").append(response.birthday);
       
      });
    }
   
    function facebookLoginByDialog()
    {
      FB.login(function(response) {
         
          statusChangeCallback(response);
         
      }, {scope: 'public_profile,email'});
    }
   
    // logging out the user from Facebook
   
    function facebookLogout()
    {
      FB.logout(function(response) {
          statusChangeCallback(response);
      });
    }
   
   
   });