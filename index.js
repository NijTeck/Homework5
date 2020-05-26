        // create timeBox element (contains time)
        const $timeBoxSpn = $('<span>');
        // can use this to get value
        $timeBoxSpn.attr('class', 'timeBox');

        // format hours for display
        let displayHour = 0;
        let ampm = "";
        if (hour > 12) {
            displayHour = hour - 12;
            ampm = "pm";
        } else {
            displayHour = hour;
            ampm = "am";
        }

        $(document).ready(function() {

                    // test flag
                    const test = false;

                    // get times from moment
                    const now = moment().format('MMMM Do YYYY');

                    // commented out for test in non-standard hours
                    let nowHour24 = moment().format('H');
                    let nowHour12 = moment().format('h');

                    // set times for tesitng after hours
                    if (test) {
                        nowHour24 = 13;
                        nowHour12 = 1;
                    }

                    let $dateHeading = $('#navbar-subtitle');
                    $dateHeading.text(now);


                    $('.date').text(`${output}`)

                    $(".planNow").click(function(e) {

                        let row = 0,
                            length = 1,
                            column = 0

                        let timeObj = {
                            "5 AM": 1,
                            "6 AM": 2,
                            "7 AM": 3,
                            "8 AM": 4,
                            "9 AM": 5,
                            "10 AM": 6,
                            "11 AM": 7,
                            "12 PM": 8,
                            "1 PM": 9,
                            "2 PM": 10,
                            "3 PM": 11,
                            "4 PM": 12,
                            "5 PM": 13,
                            "6 PM": 14,
                            "7 PM": 15,
                            "8 PM": 16,
                            "9 PM": 17,
                            "10 PM": 18,
                            "11 PM": 19,
                            "12 AM": 20,
                            "1 AM": 21,
                            "2 AM": 22,
                            "3 AM": 23,
                            "4 AM": 24
                        };

                        column = e.target.className.match(/\d+/)[0];

                        $('.modal-container').toggle();

                        $('.modal-container--close').click(function() {
                            $('.modal-container').css('display', 'none')
                        });

                        $('.schedule-container--form').submit(function(e) {
                            e.preventDefault();

                            row = timeObj[$("#start-start").val()] // calling the  id="modal-start" to select the from time


                            length = (timeObj[$("#end-end").val()]) - (timeObj[$("#start-start").val()]);
                            $('.content').append(`<div class='event' style='grid-row:${row}/span ${length};grid-column:${column};background-color: yellow;'>Reservation</div>`);
                            $('.modal-container--form')[0].reset();
                            $('.modal-container--form').off();
                            $('.modal-container').toggle();
                        });
                    });