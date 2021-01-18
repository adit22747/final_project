google.charts.load("current", {packages: ["corechart"]});
google.charts.setOnLoadCallback(drawPieChart);

$(document).ready(function() {
    $ent = "";
    $gk = "";
    $sport = "";
    $lit = "";
    $com = "";
    $attampts = [];
    $highscore = [];
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/users",
        async: false,

        success: function(data, status) {

            for ($i = 0; $i < data.length; $i++) {
                if (data[$i].ent != "Not Attampted") {
                    $ent += ((data[$i].ent.split("/")[0] / data[$i].ent.split("/")[1])).toFixed(2) + "/";
                    $ent += data[$i].ent + "/" + data[$i].username + "  ";


                }
                if (data[$i].lit != "Not Attampted") {
                    $lit += ((data[$i].lit.split("/")[0] / data[$i].lit.split("/")[1])).toFixed(2) + "/";
                    $lit += data[$i].lit + "/" + data[$i].username + "  ";


                }

                if (data[$i].sport != "Not Attampted") {
                    $sport += ((data[$i].sport.split("/")[0] / data[$i].sport.split("/")[1])).toFixed(2) + "/";
                    $sport += data[$i].sport + "/" + data[$i].username + "  ";


                }
                if (data[$i].gk != "Not Attampted") {
                    $gk += ((data[$i].gk.split("/")[0] / data[$i].gk.split("/")[1])).toFixed(2) + "/";
                    $gk += data[$i].gk + "/" + data[$i].username + "  ";


                }
                if (data[$i].com != "Not Attampted") {
                    $com += ((data[$i].com.split("/")[0] / data[$i].com.split("/")[1])).toFixed(2) + "/";
                    $com += data[$i].com + "/" + data[$i].username + "  ";


                }


            }

        },
        error: function(data, status) {

            alert('error');
        },


    })
    


    sub = ["Entertainment", "Literature", "Sport", "GK", "Commerce"];
    $ent = $ent.split("  ");
    $ent.pop();
    $ent.sort();
    // console.log($ent);
    $ent_attampt = $ent.length;
    $ent_high = $ent[$ent_attampt - 1].split("/")[0];
    $ent_high_user = $ent[$ent_attampt - 1].split("/")[3];
    console.log($ent_attampt + " " + $ent_high + " " + $ent_high_user);
    //0th index
    $attampts.push($ent_attampt);
    $highscore.push(parseFloat($ent_high));
    // console.log($attampts);
    // console.log($highscore);
    console.log("Ent");
    
    $lit = $lit.split("  ");
    $lit.pop();
    $lit.sort();
    console.log($lit);
    $lit_attampt = $lit.length;
    $lit_high = $lit[$lit_attampt - 1].split("/")[0];
    $lit_high_user = $lit[$lit_attampt - 1].split("/")[3];
    console.log($lit_attampt + " " + $lit_high + " " + $lit_high_user);
    //1st index
    $attampts.push($lit_attampt);
    $highscore.push(parseFloat($lit_high));
    // console.log($attampts);
    console.log("Lit");
    
    $sport = $sport.split("  ");
    $sport.pop();
    console.log($sport)
    $sport.sort();
    console.log($sport);
    $sport_attampt = $sport.length;
    $sport_high = $sport[$sport_attampt - 1].split("/")[0];
    $sport_high_user = $sport[$sport_attampt - 1].split("/")[3];
    console.log($sport_attampt + " " + $sport_high + " " + $sport_high_user);
    //2nd index
    $attampts.push($sport_attampt);
    $highscore.push(parseFloat($sport_high));
    // console.log($attampts);
    console.log("sport");
    
    $gk = $gk.split("  ");
    $gk.pop();
    $gk.sort();
    console.log($gk);
    $gk_attampt = $gk.length;
    $gk_high = $gk[$gk_attampt - 1].split("/")[0];
    $gk_high_user = $gk[$gk_attampt - 1].split("/")[3];
    console.log($gk_attampt + " " + $gk_high + " " + $gk_high_user);
    //3rd index
    $attampts.push($gk_attampt);
    $highscore.push(parseFloat($gk_high));
    // console.log($attampts);
    console.log("GK");
    
    
    $com = $com.split("  ");
    $com.pop();
    $com.sort();
    console.log($com);
    $com_attampt = $com.length;
    $com_high = $com[$com_attampt - 1].split("/")[0];
    $com_high_user = $com[$com_attampt - 1].split("/")[3];
    console.log($com_attampt + " " + $com_high + " " + $com_high_user);
    //4th index
    $attampts.push($com_attampt);
    $highscore.push(parseFloat($com_high));
    console.log($attampts);
    console.log($highscore);
    console.log("com");

    // $highscore.sort();
    // console.log($highscore);
                });



function drawPieChart(){
                
    datapoints = [['Category', 'No. of Questions']]; 
    console.log(datapoints);
    
    var x;
    for(x=0; x < sub.length; x++){
        datapoints.push([sub[x], $attampts[x]]);
    }
    console.log("Array for Data Table")
        console.log(datapoints)
        var options = {
            title: 'Attempts- Category Wise',
            colors: ['#F28482', '#84A59D', '#F5CAC3', '#F7EDE2', '#F6BD60'],
            legend: {position: 'bottom', textStyle: { color: '#255', fontSize: 14} }  // You can position the legend on 'top' or at the 'bottom'.
        };
        
        // Create DataTable and add the array to it.
        var figures = google.visualization.arrayToDataTable(datapoints);
        console.log(figures);
        // Define the chart type (LineChart) and the container (a DIV in our case).
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(figures, options); 
        }
// ---------------------------Bar Chart--------------------------------------

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawBarChart);

function drawBarChart(){
            datapoints = [['Category', 'Score']]; 
            var y;
            for(y=0; y < sub.length; y++){
                datapoints.push([sub[y], $highscore[y]]);
            }
            console.log(datapoints);

            var options = {
                title: 'High Scores- Category wise',
                width: 500,
                legend: { position: 'none' },
                chart: { title: 'High scores',
                         subtitle: 'Category wise' },
                bars: 'vertical', // Required for Material Bar Charts.
                // vAxis: { format: 'percent' },
                axes: {
                  x: {
                    0: { side: 'top', label: 'High Scores'} // Top x-axis.
                  }
                },
                bar: { groupWidth: "100%" }
              };
                
                
                // Create DataTable and add the array to it.
                var figures = google.visualization.arrayToDataTable(datapoints);
                console.log(figures);
               
                // Define the chart type (LineChart) and the container (a DIV in our case).
                var chart = new google.charts.Bar(document.querySelector('#barchart'));
                chart.draw(figures, options); 
                }
               


