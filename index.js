$(function() {


    // Showing the date of today to the  user

    let d = new Date();

    // SETTING THE YEAR, MONTH AND DATE  TO  SHOW UP ON THE TOP OF THE PAGE

    let toYear = d.getFullYear();
    let toMonth = d.getMonth()+1;
    let toDay = d.getDate();

    let totalDays = new Date(toYear, toMonth, 0).getDate();

    let output =  (toMonth<10 ? '0' : ' ') + toMonth + '/' + (toDay <10 ? '0' : ' ') + toDay + '/' + toYear

$('.date').text(`${output}`)

// 
// 

$('.moal-container').toggle();

// Displaying the modal container for our page. 

$('.modal-container--close').click(function() {

    $('.modal-container').css('display', 'none');
}) 


// opt[value='$@5 AM']{$@5 AM}*7;



//GIVEN I am using a daily planner to create a schedule
//WHEN I open the planner

//THEN the current day is displayed at the top of the calendar
//WHEN I scroll down

//THEN I am presented with timeblocks for standard business hours
//WHEN I view the timeblocks for that day

//THEN each timeblock is color coded to indicate whether it is in the past,       present, or future
//WHEN I click into a timeblock

//THEN I can enter an event
//WHEN I click the save button for that timeblock

//THEN the text for that event is saved in local storage
//WHEN I refresh the page

//THEN the saved events persist



})