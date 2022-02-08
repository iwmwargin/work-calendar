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
  $("#13 .description").val(localStorage.getItem("1"));
  $("#14 .description").val(localStorage.getItem("2"));
  $("#15 .description").val(localStorage.getItem("3"));
  $("#16 .description").val(localStorage.getItem("4"));
  $("#17 .description").val(localStorage.getItem("5"));
});

var currentTime = new Date();
let hours = currentTime.getHours();

// function that will run else if statements to figure out time and apply the color accordingly
$(".time-block").each(function () {
  var time = parseInt($(this).attr("id"))
  
  if (time === hours) {
    $(this).addClass("present");
    $(this).removeClass("past");
    $(this).removeClass("future");
  } else if (time < hours) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
  } else {
    $(this).addClass("future");
    $(this).removeClass("present");
    $(this).removeClass("past");
  }
});

