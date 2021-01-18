function startQuiz() {
    //  here code to redirect to quiz page
}


$(document).ready(() => {
    //take it from session
    $a = sessionStorage.getItem('username');
    // alert($a);
    $username = $a;


    $(".startquiz").click(function () {
        $subname = $(this).attr("id");
        $attampt = false;
        $.ajax({


            method: "GET",
            url: "http://localhost:3000/users",
            async: false,
            // contentType: "application/json; charset=utf-8",


            success: function (data, status) {


                 for ($i = 0; $i < data.length; $i++) {
                     

                    if (data[$i].username == $username) {
                        
                        if (data[$i][$subname] == "Not Attampted")
                        
                                
                            $attampt = true;
                        break;

                    }


                }




            },
            error: function (data, status) {

                alert('error');
            },

        }); // success

        if ($attampt) {
            // window.location.replace("quizzz.html?sub=" + $(this).attr("id"));
            $(window).attr('location', 'quizzz.html?sub='+$(this).attr("id")); 
        }
        else {
            alert("You have already attampted this quiz");
        }


    });
});