$(function() {
      
    $("form[name='register']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        username: {
          required: true,
        }
      },
      
      messages: {
        username: "Please enter username",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
    
      submitHandler: function(form) {
        form.submit();
      }
    });
  });