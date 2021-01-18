// $(document).ready(function () {
//     $("#btnSubmit").click(function () {
//         //collect userName and password entered by users
//         $username = $("#username").val();
//         $email=$("#email").val();
//         $password = md5($("#password").val());
//        // $password = CryptoJS.MD5($("#password").val());
//         //$sessionValue = $("#hdnSession").data('someKey');
//         console.log($username);
//         check_log($username, $email, $password);

//     });
//     $('#regform').validate({
//         errorClass: "error fail-alert",
//         validClass: "valid success-alert",
//         rules:{
//             username:{
//                 required: true,
//                 minlength: 5
//             },
//           email: {
               
//                 required: true,
//             },
//             passreg: {
//                 minlength: 5,
//                 min: 5,
//                 max: 10,
//                 required: true,
//             },
          
//         },

//         messages: {
//             usrrname:{
//                 required: "Please choose a username",
//                 minlength: "your username must be at least 5 characters"
//             },
//            email:{
               
//                 required: "Please enter a email",
//             },
//             passreg:{
//                 min: "Your marks should be atleast 5",
//                 max: "Your marks cannot be more than 10",
//                 required: "Please eneter password",
//                 minlength: "Your password should must be at least 5 characters"
//             },
            
//        },
//         submitHandler: function(form) {
//             form.submit();
//     }
// })
// });


// function check_log($username,$email, $password) { 
//     console.log($username);
//     if ($username &&$email && $password) { // values are not empty
//         $.ajax({
//             type: "GET",
//             url: "http://localhost:3000/users",
//             // contentType: "application/json; charset=utf-8",


//             success: function (data, status) {
//                 $flag = 0;
//                 // alert("inFunc");
//                 //console.log(data[0].id);
//                 for ($i = 0; $i < data.length; $i++) {

//                     if (data[$i].username == $username) {

//                         alert("USER ALREADY EXIST!");
//                         $flag = 0;
//                         $(window).attr('location', '../html/login.html');
//                         break;
//                         // $(window).attr('location', './log_success.html');

//                     }
//                     else {

//                         $flag = 1;
//                         // continue;
//                     }
//                 }

//                 if ($flag == 1) {
//                     auth($username,$email, $password);
//                 }



//                 // } else {
//                 //     // $(window).attr('location', './login.html');
//                 //     $(location).attr('href','https://www.sassmeister.com/');
//                 // }}
//             },
//             error: function (data, status) {

//                 alert('error');
//             },
            

//         }) // success
//     } // ajax


//    // e.preventDefault();

// }

// //authenticate function to make ajax call
// function auth($username,$email, $password) {
//     $.ajax({
//         type: "POST",
//         //SEND TO MY SERVER URL
//         url: "http://localhost:3000/users",
//         dataType: 'json',
//         //async: false,
//         data: { 'username': $username, 'email':$email,'password': $password ,'ent':-1,'lit':-1,'gk':-1,'tech':-1,'sports':-1},
//         success: function (response) {
//             $.session.set('username', $username);
//             $(window).attr('location', '../html/user_dashboard.html');
           
            
           
           
//             console.log(response);
//         }
//     })
// }

$(document).ready(()=>{

    // ----------- add question modal --------

    $('#regform').validate({
                errorClass: "error fail-alert",
                validClass: "valid success-alert",
                rules:{
                    username:{
                        required: true,
                        minlength: 5
                    },
                  email: {
                       
                        required: true,
                    },
                    passreg: {
                        minlength: 5,
                        // min: 5,
                        // max: 10,
                        required: true,
                    },
                  
                },
        
                messages: {
                    usrrname:{
                        required: "Please choose a username",
                        minlength: "your username must be at least 5 characters"
                    },
                   email:{
                       
                        required: "Please enter a email",
                    },
                    passreg:{
                        // min: "Your marks should be atleast 5",
                        // max: "Your marks cannot be more than 10",
                        required: "Please eneter password",
                        minlength: "Your password should must be at least 5 characters"
                    },
                    
               },
                submitHandler: function(form) {
                //    alert('submiitedd');
                   $username = $("#username").val();
                           $email=$("#email").val();
                           $password = md5($("#password").val());
                           check_log($username, $email, $password);
            }
}) 

    })

    function check_log($username,$email, $password) { 
            console.log($username);
            if ($username &&$email && $password) { // values are not empty
                $.ajax({
                    type: "GET",
                    url: "http://localhost:3000/users",
                    // contentType: "application/json; charset=utf-8",
        
        
                    success: function (data, status) {
                        $flag = 0;
                        // alert("inFunc");
                        //console.log(data[0].id);
                        for ($i = 0; $i < data.length; $i++) {
        
                            if (data[$i].username == $username) {
        
                                alert("USER ALREADY EXIST!");
                                $flag = 0;
                                $(window).attr('location', '../html/login.html');
                                break;
                                // $(window).attr('location', './log_success.html');
        
                            }
                            else {
        
                                $flag = 1;
                                // continue;
                            }
                        }
        
                        if ($flag == 1) {
                            auth($username,$email, $password);
                        }
        
        
        
                        // } else {
                        //     // $(window).attr('location', './login.html');
                        //     $(location).attr('href','https://www.sassmeister.com/');
                        // }}
                    },
                    error: function (data, status) {
        
                        alert('error');
                    },
                    
        
                }) // success
            } // ajax
        
        
           // e.preventDefault();
        
        }


        function auth($username,$email, $password) {
                $.ajax({
                    type: "POST",
                    //SEND TO MY SERVER URL
                    url: "http://localhost:3000/users",
                    dataType: 'json',
                    //async: false,
                    data: { 'username': $username, 'email':$email,'password': $password ,'ent':"Not Attampted",'com':"Not Attampted",'lit':"Not Attampted",'sport':"Not Attampted",'gk':"Not Attampted"},
                    success: function (response) {
                        $.session.set('username', $username);
                        $(window).attr('location', '../../User Dashboard/html/userdashboard.html');
                        
                       
                       
                        console.log(response);
                    }
                })
            }