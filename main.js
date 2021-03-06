/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar*/
//(Borrowed Ideal from {  https://medium.com/@aleks.roslyakov/using-css-grid-jquery-making-a-daily-scheduler-pt-ii-7af7d239a55d 
// So both code looks alike, but it was for reference only and  I wrote each lines of the code myself. })

$(function() {
    let d = new Date()

    let year = d.getFullYear()
    let month = d.getMonth()+1;
    let day = d.getDate()

    let totalDays = new Date(year, month, 0).getDate()

    let output =
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' + year

    $('.date').text(`${output}`)

    $( ".planNow" ).click(function(e) {

        /*WHEN I scroll down
THEN I am presented with timeblocks for standard business hours */

        let row = 0, length = 0, column = 0
        let timeObj = {
            "8 AM" : 4,
            "9 AM" : 5,
            "10 AM" : 6,
            "11 AM" : 7,
            "12 PM" : 8,
            "1 PM" : 9,
            "2 PM" : 10,
            "3 PM" : 11,
            "4 PM" : 12,
            "5 PM" : 13,

        }


        //column = e.target.className.match(/\d+/)[0]
/*  WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past,       present, or future */

        $('.schedule-container').toggle()

        $('.schedule-container--close').click(function(){
            $('.schedule-container').css('display', 'none')
        })
        
        $('.schedule-container--form').submit(function(e){
            e.preventDefault()
           
            row = timeObj[$( "#startingTime" ).val()]

            // WHEN I click into a timeblock
            //THEN I can enter an event

            length = (timeObj[$( "#endingTime" ).val()]) - (timeObj[$( "#startingTime" ).val()])

            // WHEN I click the save button for that timeblock
            //THEN the text for that event is saved in local storage

            $('.content-container').append(`<div class='event' style='grid-row:${row}/span ${length};grid-column:${column};background-color: yellow;'>Reservation</div>` ) 
            
            // This will lunch an input for a note to be added .
            jQuery(function($){
                $('#planNow').one('click', function(){
                    console.log("planNow");
                    var r=$('<input/>').attr({
                        type: "button",
                        id: "field",
                        value: 'new'
                    });
                    $("schedule-container").append(r);   
                })
            })
        // WHEN I refresh the page
        //THEN the saved events persist
        onsubmit="content-container(); return false;"
            $('.schedule-container--form')[0].reset();
            $('.schedule-container--form').off();
            $('.schedule-container').toggle();
        })
      });
  });