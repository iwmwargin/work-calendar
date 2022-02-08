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
    // pulling all items from localStorage
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
var time = moment();
// function that will run else if statements to figure out time and apply the color accordingly
$(".description").each(function () {
    var hours = parseInt(moment().format("H"));
if(hours > 9 && hours <= 17){
    $(".description").addClass("present");
    $(".description").removeClass("past");
    $(".description").removeClass("future");
}
else if(hours < 9){
    $(".description").addClass("past");
    $(".description").removeClass("present");
    $(".description").removeClass("future");
}
else {
    $(".description").addClass("future");
    $(".description").removeClass("present");
    $(".description").removeClass("past");
}

})



