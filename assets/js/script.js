const day = moment().format("MMM Do YY");
$("#currentDay").text(day)
const currentTime = moment().hour();

const hours = $(".time-block");


hours.each(function(){
    let hour = $(this).attr("id");
    if (currentTime === parseInt(hour)) {
        $(this).addClass("present");
    }else if (currentTime > parseInt(hour)){
        $(this).addClass("past");
    }else {
        $(this).addClass("future");
    }
    
});

$(".saveBtn").on( "click", function() {
    console.log( $( this ).text("squirrels"));
  });







// if for colors in time

// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


