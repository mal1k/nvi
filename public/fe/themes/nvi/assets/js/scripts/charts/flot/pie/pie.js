/*=========================================================================================
    File Name: pie.js
    Description: Flot pie chart
    ----------------------------------------------------------------------------------------
    Item Name: Stack - Responsive Admin Theme
    Version: 3.2
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// Pie chart
// ------------------------------
$(window).on("load", function(){

    var options = {
        series: {
            pie: {
                show: true,
                
            }

        },
        legend: {
            show: false
        },
        colors: ['#262626', '#262626']
    };

    var data = [
        { label: "Series1",  data: 50},
        { label: "Series2",  data: 70},
       
    ];

    $.plot("#simple-pie-chart", data, options);
});