$(document).ready(function () {
    //user session-management 
    $a = sessionStorage.getItem('username');
    if ($a === null) {
        $(window).attr('location', '../html/login.html');
    }


    $("#logout_btn").click(function(){
      
        $(window).attr('location', '../html/index.html'); 
        sessionStorage.clear();
        
    })
    


  
}



)



