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

$(".planner").click(function() {
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
let row = 0;
let colume = 0;
let lenght = 0;


///////////////// Regex Expressions //////////////////////////////
//// Drawing Idea from https://www.rexegg.com/regex-quickstart.html/////

colume = e.target.planes.match(/\d+/) [0];


///////////////// Regex Expressions Ends /////////////////////////

////////// SETTING THE TIMEOBJ ////////////// 

let timeObj = {

"5 AM " : 1,
"6 AM " : 2,
"7 AM " : 3,
"8 AM " : 4,
"9 AM " : 5,
"10 AM " : 6,
"11 AM " : 7,
"12 NOON " : 8,
"1 PM " : 9,
"2 PM " : 10,
"3 PM " : 11,
"4 PM " : 12,
"5 PM " : 13,
"6 PM " : 14,
"7 PM " : 15,
"8 PM " : 16,
"9 PM " : 17,









}
//THEN each timeblock is color coded to indicate whether it is in the past,       present, or future
//WHEN I click into a timeblock

//THEN I can enter an event
//WHEN I click the save button for that timeblock

//THEN the text for that event is saved in local storage
//WHEN I refresh the page

//THEN the saved events persist

});

})