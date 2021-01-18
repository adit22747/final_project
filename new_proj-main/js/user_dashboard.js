$(document).ready(function () {
    //user session-management 
    $a = sessionStorage.getItem('username');
    if ($a === null) {
        // alert('inside');
        $(window).attr('location', '../../html/login.html');
    }



    $("#logout_btn").click(function(){
       sessionStorage.clear();
        // console.log(sessionStorage);
        $(window).attr('location', '../../html/index.html'); 
       
        
    })
})
