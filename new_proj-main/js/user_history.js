$(document).ready(function () {




    //user session-management 
    if ($.session.get('username') === undefined) {
        $(window).attr('location', './log_in.html');
    }
    $("#btnSubmit").click(function (e) { 
        $.session.clear();
        $(window).attr('location', './log_in.html');

    })
//     $("#btnSubmitd").click(function (e) { 
//         $.ajax({           
//     type: "DELETE",
//     url: "http://localhost:3000/users"+$v,
//     data: {
//         'username':data[$v].username,
//         'email':data[$v].email,
//         'password':data[$i].password
//     }
// }).done(function() {
//     $.session.clear();
//         $(window).attr('location', './log_in.html');
//         alert( "profile Deleted ");
//     });



      

    // })

  
        $username_s=$.session.get('username'); 
        alert($username_s);
        $ent="";
        $lit="";
        $tech="";
        $gk="";
        $sports="";
        if ($username_s) { // values are not empty
        $.ajax({

            method: "GET",
            url: "http://localhost:3000/users/?username="+$username_s,
            // contentType: "application/json; charset=utf-8",


            success: function (data, status) {
                console.log(data);
                $flag = 0;
                
                $ent=data[0].ent;
                $lit=data[0].lit;
                $sports=data[0].sports;
                $gk=data[0].gk;
                $tech=data[0].tech;

                if($ent=="-1"){
                    $("#ENT").html("NOT attempted yet!");
                }
                else{
                    $("#ENT").html($ent);

                }
                if($lit=="-1"){
                    $("#LIT").html("NOT attempted yet!");
                }
                else{
                    $("#LIT").html($lit);

                }
                if($tech=="-1"){
                    $("#tech").html("NOT attempted yet!");
                }
                else{
                    
                $("#tech").html($tech);

                }
                if($sports=="-1"){
                    $("#SPORTS").html("NOT attempted yet!");
                }
                else{
                    $("#SPORTS").html($sports);

                }
                if($gk=="-1"){
                    $("#GK").html("NOT attempted yet!");
                }
                else{
                    $("#GK").html($gk);

                }

                
               
              
               
              

                
                   
               
            },
            error: function (data, status) {

                alert('error');
            },
            
        }) // success
    }

    
    
   



})
