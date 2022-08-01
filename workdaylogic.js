// today's date and time thanks to moment.js
var DatenTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#todayIs").html(DatenTime);
$("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
});

$(document).ready(function () {

    // event listener for save button
    $(".saveBtn").on("click", function () {
        var userInput = $(this).siblings(".input").val();
        var timeIS = $(this).parent().attr("id").split("hour")[1];
        localStorage.setItem(userInput, timeIS);
    })

    // military time helps to keep track of actual time in an easy manner
    $("#hour8 .input").val(localStorage.getItem("hour8"));
    $("#hour9 .input").val(localStorage.getItem("hour9"));
    $("#hour10 .input").val(localStorage.getItem("hour10"));
    $("#hour11 .input").val(localStorage.getItem("hour11"));
    $("#hour12 .input").val(localStorage.getItem("hour12"));
    $("#hour13 .input").val(localStorage.getItem("hour13"));
    $("#hour14 .input").val(localStorage.getItem("hour14"));
    $("#hour15 .input").val(localStorage.getItem("hour15"));
    $("#hour16 .input").val(localStorage.getItem("hour16"));
    $("#hour17 .input").val(localStorage.getItem("hour17"));
    $("#hour18 .input").val(localStorage.getItem("hour18"));
    $("#hour19 .input").val(localStorage.getItem("hour19"));


    // function to over the time blocks
    function trackTime() {
        var currentTime = moment().hour();

        $(".time-div").each(function () {
            var timeDiv = $(this).attr("id").split("hour")[1];

            if (currentTime == timeDiv) {
                $(this).addClass("present");
                $(this).children(".description");
            } else if (currentTime < timeDiv) {
                $(this).removeClass("present");
                $(this).addClass("future");
            } else {
                $(this).removeClass("future");
                $(this).addClass("past");
            }
        });
    }
    // start function
    trackTime();
});

// event listener for delete button
$("#delBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
});