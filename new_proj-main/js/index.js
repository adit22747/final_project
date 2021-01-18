
(function() {
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
})(); 
$(document).ready(()=>{

    // ------- show card more info ----------
    $('#question').click(
        ()=>{

            $('.hideQueMore').css({"display":"block",
                            "text-align": "center"
                        });
        }
    )


    $('#user').click(
        ()=>{
     
            $('.hideUserMore').css({"display":"block",
                            "text-align": "center"
                        });
        }
    )

    // ----------- add question modal --------

     $('#addquesform').validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules:{
            category:{
                required: true,
            },
            ques_add: {
                minlength: 3,
                maxlength: 50,
                required: true,
            },
            weight: {
                minlength: 1,
                min: 1,
                max: 5,
                required: true,
            },
            option1_add: {
                minlength: 1,
                required: true,
            },
            option2_add: {
                minlength: 1,
                required: true,
            },
            option3_add: {
                minlength: 1,
                required: true,
            },
            option4_add: {
                minlength: 1,
                required: true,
            },
           
        },

        messages: {
            category:{
                required: "Please choose a category",
            },
            ques_add:{
                minlength: "Your question must be at least 3 characters",
                maxlength: "Your question must be at most 25 characters",
                required: "Please enter a question",
            },
            weight:{
                min: "Your marks should be atleast 1",
                max: "Your marks cannot be more than 5",
                required: "Please allocate marks",
            },
            option1_add: {
                minlength: "Your option should atleast 1 character",
                required: "Please give an option",
            },
            option2_add: {
                minlength: "Your option should atleast 1 character",
                required: "Please give an option",
            },
            option3_add: {
                minlength: "Your option should atleast 1 character",
                required: "Please give an option",
            },
            option4_add: {
                minlength: "Your answer should atleast 1 character",
                required: "Please give an answer",
            },       
       },
        submitHandler: function(form) {
            add();
    } 
}) 

    })