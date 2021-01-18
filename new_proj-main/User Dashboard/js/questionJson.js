$(document).ready(

    () => {

       
        // $.ajax({
        //     url: "http://localhost:3000/lit",
        //     method: "GET",
        //     dataType: "JSON",
        //     success: (x) => {
        //         var student = "";
        //         //CONSTRUCTION OF ROWS HAVING 
        //         // DATA FROM JSON OBJECT 
        //         for (var i = 0; i < x.length; i++) {
        //             student += '<tr>';
                
        //             student += '<td class="edit">' +
        //                 x[i].id + '</td>';
        //             $x = x[i].id;
        //             $a = 'lit';


        //             student += '<td class="edit"><input class="' + x[i].id + 'lit" id="ques" value="' + x[i].question + '" disabled></input>' + '</td>';

        //             student += '<td class="edit"><input class="' + x[i].id + 'lit" id="option1" value="' + x[i].option1 + '" disabled></input>' + '</td>';

        //             student += '<td class="edit"><input class="' + x[i].id + 'lit" id="option2" value="' + x[i].option2 + '" disabled></input>' + '</td>';

        //             student += '<td class="edit"><input class="' + x[i].id + 'lit" id="option3" value="' + x[i].option3 + '" disabled></input>' + '</td>';

        //             student += '<td class="edit"><input class="' + x[i].id + 'lit" id="option4" value="' + x[i].option4 + '" disabled></input>' + '</td>';


        //             student += '<td><button type="button" id="' + $x + '" class="btn btn-primary" onclick="update(' +
        //                 x[i].id + ', $a)" ><i class="fas fa-edit"></i></button></td>';

        //             student += "<td><button type='button' class='btn btn-danger' onclick='del($x,$a)'><i class='fas fa-trash-alt'></i></button></td>";

        //             student += '</tr>';

        //         }
        //         $('#table').append(student);


        //     },
        //     error: function(response) {
        //         console.log(response);
        //     }
        // });
    });



$category = null;
$id = null;
$flag = 0;
$(function() {
    $("#category").change(function() {
        $category = $('#category').val();
        console.log($category);
        $.get("http://localhost:3000/" + $category, function(data, status) {
            $x = data.length - 1;

            $id = data[$x].id;

        });
    });
});



function add() {
    console.log('done');
    $category = $('#category').val();
    $question = $('#ques_add').val();
    $option1 = $('#option1_add').val();
    $option2 = $('#option2_add').val();
    $option3 = $('#option3_add').val();
    $option4 = $('#option4_add').val();
    ++$id;
    console.log($id);
    var data1 = { 'question': $question, 'option1': $option1, 'option2': $option2, 'option3': $option3, 'option4': $option4 };
    $.ajax({
        url: "http://localhost:3000/" + $category,
        method: "POST",
        data: data1,
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }
    });
};


    
    function update(val) {
        $split = val.split(" ");
        $var = '.' + $split[0] + $split[1] + '';
        $var2 = '.' + $split[0];
    
    
    
        if ($flag == 0) {
            alert('inside');
    
            $($var2).attr('disabled', false);
            $($var2).attr('autofocus');
            // $(this.button).text('save');
            // $($var).attr('class', 'btn btn-success');
            $flag = 1;
        } else {
            $question = $('#' + $split[0] + 'q').text();
    
            $option1 = $('#' + $split[0] + '1').val();
            $option2 = $('#' + $split[0] + '2').val();
            $option3 = $('#' + $split[0] + '3').val();
            $option4 = $('#' + $split[0] + '4').val();
    
            // alert($option1);
            //  var id=1;
            var data1 = { 'question': $question, 'option1': $option1, 'option2': $option2, 'option3': $option3, 'option4': $option4 };
            $.ajax({
                url: "http://localhost:3000/" + $split[1] + "/" + $split[0],
                method: "PUT",
                data: data1,
                success: function(response) {
                    console.log(response);
                },
                error: function(response) {
                    console.log(response);
                }
            });
            $flag = 0;
        }

   
}

function del(val, a) {
    alert(val);
    $.ajax({
        url: "http://localhost:3000/" + a + "/" + val,
        method: "DELETE",
        success: function(response) {
            console.log(response);
        },
        error: function(response) {
            console.log(response);
        }
    });
}

$category=null;
$id = null;
$flag=0;
$(function() {
    $("#category").change(function() {
        $category=$('#category').val();
        console.log($category);
        

         $.ajax({
            url: "http://localhost:3000/"+$category,
            method: "GET",
            dataType: "JSON",
            success: (x) => {
                var student = "";
                //CONSTRUCTION OF ROWS HAVING 
                // DATA FROM JSON OBJECT 
                
                $('#table').append('<tbody>');
                for (var i = 0; i < x.length; i++) {
                    
                    student += '<tr>';
                    // student += '<td>entertainment</td>';
                    
                    $y = '"' + x[i].id + $category+'"';
                   
                    $z = '"' + x[i].id + '"';

                    student += '<td ><textarea  disabled  class="' + x[i].id + '" id="' + x[i].id + 'q">' + x[i].question + ' </textarea>' + '</td > ';

                    student += '<td ><input  value="' + x[i].option1 + '" class="' + x[i].id + '" id="' + x[i].id + '1" disabled></input>' + '</td>';

                    student += '<td ><input  value="' + x[i].option2 + '"  class="' + x[i].id + '" id="' + x[i].id + '2" disabled></input>' + '</td>';

                    student += '<td ><input  value="' + x[i].option3 + '"  class="' + x[i].id + '" id="' + x[i].id + '3" disabled></input>' + '</td>';

                    student += '<td ><input  value="' + x[i].Answer + '"  class="' + x[i].id + '" id="' + x[i].id + '4" disabled></input>' + '</td>';
                   

                    student += "<td><button type='button' class='btn btn-primary' onclick='update(" + $y.toString() + ")'>Update</button></td>";

                    student += "<td><button type='button' class='btn btn-danger' onclick='del(" + $y.toString() + ")'>Delete</button></td>";

                    student += '</tr>';
                    student += '</tr>';
                    

                }
                $('#table').html(student);
                $('#table').append('</tbody>');


            },
            error: function(response) {
                console.log(response);
            }
        });
    });
});
