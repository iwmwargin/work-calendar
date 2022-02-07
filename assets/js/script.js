var currentDay = document.getElementById("current-day");
var timeBlock = document.getElementsByClassName("time-block");

// This code prepares the JavaScript to be ready once the Dom is ready
$(document).ready(function () {
    // display current day and time
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
      
      $(".saveBtn").click(function () {
        var todo = $(this).siblings(".description").val(); // Grab the text input into textarea
        var hour = $(this).parent().attr("id"); // Grab the hour
        //set items to local storage.
        localStorage.setItem(hour, todo);
    });
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));

   
})
var objDate = new Date();
var hours = objDate.getHours();
if(hours > 9 && hours <= 17){
    $(".description").addClass("present");
}
else if(hours < 9){
    $(".description").addClass("past");
}
else {
    $(".description").addClass("future");
}



