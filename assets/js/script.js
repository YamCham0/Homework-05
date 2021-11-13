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

$(".saveBtn").on( "click", function(event) {
    console.log($( this ).text("squirrels"));
    event.preventDefault();
    let input = $( this).siblings("textarea").val();
    let key = $( this).siblings("textarea").attr("id");
    localStorage.setItem(key, input);
});


for (let i = 0; i < 9; i++) {
    let key = localStorage.getItem(i);
    if(key) {
    $(`#${i}`).text(key);
} 
};


// WHEN I refresh the page
// THEN the saved events persist


