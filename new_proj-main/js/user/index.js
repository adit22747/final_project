"use strict";
$(document).ready(function(){
    $("#submit").click(function(){
        var email = $("#email").val();
        sessionStorage.setItem("emailId",email);
        window.open("./user/register.html","_self");
        
    });
  });