$(document).ready(function () {
    
    // if($.session.get('username')){
    //     $(window).attr('location', '../../User Dashboard/html/userdashboard.html');
    // }
   
    $("form#loginForm").submit(function (e) { // loginForm is submitted


        $username = $('#username').val(); // get username
        $password = md5($("#password").val()); // get password
        //alert("inside click func");
        //alert($username);
        if ($username && $password) { // values are not empty
            $.ajax({

                method: "GET",
                url: "http://localhost:3000/users",
                // contentType: "application/json; charset=utf-8",


                success: function (data, status) {
                    $flag = 0;
                    
                    for ($i = 0; $i < data.length; $i++) {

                        if (data[$i].username == $username && data[$i].password == $password) {
                            $flag = 0;
                            if(data[$i].username != "admin_1")
                            {   $(window).attr('location', '../../User Dashboard/html/userdashboard.html');
                            }
                            else{
                                $(window).attr('location', '../html/admin_dash.html');
                            }
                            $.session.set('username',$username);
                            break;

                        }
                        
                        else{
                            $flag = 1;
                        }
                        
                    }

                    if ($flag == 1) {
                        alert("Username Incorrect or Password Didn't Match!!!");
                        $(window).attr('location', '../html/login.html');
                    }
                    
                },
                error: function (data, status) {

                    alert('error');
                },
               

            }) // success



            // function admin($username,$password){


            //     $.ajax({

            //         method: "GET",
            //         url: "http://localhost:3000/admin",
            //         // contentType: "application/json; charset=utf-8",
    
    
            //         success: function (data, status) {
            //             $flag = 0;
                        
            //             for ($i = 0; $i < data.length; $i++) {
    
            //                 if (data[$i].username == $username && data[$i].password == $password) {
                              
            //                     $flag = 0;
            //                     $(window).attr('location', '../html/admin_dash.html');
            //                     $.session.set('username',$username);
            //                     break;
    
            //                 }
                            
            //                 else{
            //                     $flag = 1;
            //                 }
                            
            //             }
    
            //             if ($flag == 1) {
            //                 alert("Username Incorrect or Password Didn't Match!!!");
            //                 $(window).attr('location', '../html/login.html');
            //             }
                        
            //         },
            //         error: function (data, status) {
    
            //             alert('error');
            //         },
                   
    
            //     })

            // }
        } // ajax


        e.preventDefault();

    } // if
    )
})