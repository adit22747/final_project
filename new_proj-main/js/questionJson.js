
$(document).ready(



    () => {
        $image=0;
        $category=null;
        $id = null;
        $flag=0;

        bodyParser = {
            json: {limit: '50mb', extended: true},
            urlencoded: {limit: '50mb', extended: true}
          };
       
      $("#uploadpic").change(function(){
        var a=(this.files[0].size);
        // alert(this.files[0].name);
       console.log(this.files[0]);
        if(a > 35000) {
             alert('large');
            this.value="";
            return false;
        }
    
      })
    });









    

    function update(val) {
       
    //     const file =$("#ret",this).attr("src");
    //   alert(file);alert(val);
        
        // alert(val);
        $split = val.split(" ");
        $var = '.' + $split[0] + $split[1] + '';
        $var2 = '.' + $split[0];
        // alert($var);
    
    
         if ($flag == 0) {
    
            $($var2).attr('disabled', false);
            $($var2).attr('autofocus');
            // $(this.button).text('save');
            // $($var).attr('class', 'btn btn-success');
            $flag = 1;
        }  
        else {
            alert("Updation in process....");
            $question = $('#' + $split[0] + 'q').text();
            $option1 = $('#' + $split[0] + '1').val();
            $option2 = $('#' + $split[0] + '2').val();
            $option3 = $('#' + $split[0] + '3').val();
            $option4 = $('#' + $split[0] + '4').val();
            $weight = $('#' + $split[0] + 'w').val();
    
              alert($weight);
            // var id=1;
            var data1 = { 'question': $question, 'Answer': $option4,'option1': $option1, 'option2': $option2, 'option3': $option3,'weight':$weight };
            $.ajax({
                url: "http://localhost:3000/" + $split[1] + "/" + $split[0],
                method: "PATCH",
                data: data1,
                success: function(response) {
                    console.log(response);
                },
                error: function(response) {
                    console.log(response);
                }
            }); 
            $($var2).attr('disabled', true);

            $flag = 0; 
            alert("Data Update successfully....");
            location.reload();
        } 
   
}

function del(val) {
    $con = window.confirm("Are you sure wants to delete?");
    if ($con) {
        $data = val.split(" ");
        // alert($data);

        $.ajax({
            url: "http://localhost:3000/" + $data[1] + "/" + $data[0],
            method: "DELETE",
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log(response);
            }
        });
    }
}


$(function() {
    $("#category").change(function() {
     $category = $('#category').val();
     $.ajax({
        url: "http://localhost:3000/"+$category,
        method: "GET",
        dataType: "JSON",
        success: (x) => {
            var student = "";
            //CONSTRUCTION OF ROWS HAVING 
            // DATA FROM JSON OBJECT 
            for (var i = 0; i < x.length; i++) {
                student += '<tr>';
                student += '<td>'+$category+'</td>';
                student += '<td>' +
                    x[i].id + '</td>';
                $y = '"' + x[i].id +" "+ $category+'"';
                $z = '"' + x[i].id + '"';

                student += '<td ><textarea  disabled  class="' + x[i].id + '" id="' + x[i].id + 'q">' + x[i].question + ' </textarea>' + '</td > ';

                student += '<td ><input  value="' + x[i].option1 + '" class="' + x[i].id + '" id="' + x[i].id + '1" disabled></input>' + '</td>';

                student += '<td ><input  value="' + x[i].option2 + '"  class="' + x[i].id + '" id="' + x[i].id + '2" disabled></input>' + '</td>';

                student += '<td ><input  value="' + x[i].option3 + '"  class="' + x[i].id + '" id="' + x[i].id + '3" disabled></input>' + '</td>';

                student += '<td ><input  value="' + x[i].Answer + '"  class="' + x[i].id + '" id="' + x[i].id + '4" disabled></input>' + '</td>';


                student += '<td ><input  value="' + x[i].weight + '"  class="' + x[i].id + '" id="' + x[i].id + 'w" disabled></input>' + '</td>';





                $b = $category;
             // alert(x[i].image);

                student += "<td><button type='button' class='btn btn-primary' onclick='update(" + $y.toString() + ")'><i class='fa fa-edit'></i></button></td>";

                student += "<td><button type='button' class='btn btn-danger' onclick='del(" + $y.toString() + ")'><i class='fa fa-trash'></i></button></td>";

                

            //    student += "<td><img id='ret' src="+x[i].img+" height='40' width='40'></img></td>";


                student += '</tr>';

            }
            $('#tbody').html(student);


        },
        error: function(response) {
            console.log(response);
        }
    });
    //  alert($c);
    });
   
});



function add(e) {
    
//     alert("IN ADD...");
//    alert($image);
    $category = $('#category').val();
    $question = $('#ques_add').val();
    $option1 = $('#option1_add').val();
    $option2 = $('#option2_add').val();
    $option3 = $('#option3_add').val();
    $option4 = $('#option4_add').val();
    $weight = $('#weight').val();
    
    var data1 = { 'question': $question, 'Answer': $option1, 'option1': $option2, 'option2': $option3, 'option3': $option4 ,'img':$image,'weight':$weight };
    $.ajax({
        url: "http://localhost:3000/" + $category,
        method: "POST",
        data: data1,
        success: function(response) {
            // console.log(response);

            console.log('done');
        },
        error: function(response) {
            console.log(response);
        }
    });
}


//add image ENCODE to BASE64
function encodeImageFileAsURL(element) {
  
  const file = document.querySelector('input[type=file]').files[0];
  
  const reader = new FileReader();

    reader.onloadend = function () {
     // addToDB(reader.result);
     
      $image=reader.result;
    //    console.log($image);
    };
    reader.readAsDataURL(file);
  }