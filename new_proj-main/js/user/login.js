$(function() {
    $("form[name='login']").validate({
      rules: {
        
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          
        },
        username: {
          required: true,
        }
      },
       messages: {
        email: "Please enter a valid email address",
       
        password: {
          required: "Please enter password",
         
        }
        
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });