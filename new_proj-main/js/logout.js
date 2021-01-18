$(document).ready(function () {
   



    $("#logout_btn").click(function(){
       sessionStorage.clear();
        // console.log(sessionStorage);
        $(window).attr('location', '../../html/index.html'); 
       
        
    })
})


// $("#logout_btn").click(function(){
//            sessionStorage.clear();
//             // console.log(sessionStorage);
//             $(window).attr('location', '../../html/index.html'); 
// })