//jQuery run once document has loaded
$(document).ready(function () {
    //Alert once document has loaded
    alert("Document has loaded");

    //Change the background color from darkgrey to black once loaded by adding the class
    $("body").addClass('backgroundColor');

    //Change a single paragraph' styling
    $("#pOurStory").css({
        fontWeight: 'bold',
        fontStyle: 'italic'
    });

    //Fade Out the different objects categories
    $(".coreBackground").on('click', function () {
        $(this).fadeOut(1000);
    });

    //Create a drop down menu when mouse hovers over the item
    //Hide all the below classes
    $(".breakfast , .lunch, .dinner, .dessert, .drinks").hide();
    //function to make the relevant class visible
    function show() {
        const divID = $(this).attr('data-panelId');
        $('.' + divID).show('2000').addClass(show)
    };
    //function to hide the relevant class
    function hide() {
        const divID = $(this).attr('data-panelId');
        $('.' + divID).hide('2000')
    };
    //When the mouse enter, the relevant class becomes visible in a drop down - when the mouse leaves it is hidden again
    $(".menuItems").on('mouseenter', show).on('mouseleave', hide);

    //Declare the variables outside of the function to be able to use with other fuction also.
    let slideChanger = 0;
    let changeColor = 0;

    //Once click on button - the background starts changing colors and slide side to side
    $('#background').on('click', function () {
        //Set Interval for slide side by side
        //Make sure the time is the same or more as in the function otherwise will not immediately react when stopping Interval
        slideChanger = setInterval(animateBoxes, 2000);
        //Set color changing interval 
        changeColor = setInterval(changecolors, 1000);

        //Function to run to slide items left to right
        function animateBoxes() {
            $(".bodyMove").animate({
                'margin-left': '-500px'
            }, 1000).animate({
                'margin-left': '500px'
            }, 1000);
        }
        //Run function
        animateBoxes();

        //Set variable to 0 to start at first object
        let counterColors = 0;
        //function to change the colors
        function changecolors() {
            let colors = ["blue", "red", "green", "purple", "black"];
            //Keep running until last color is reached and start counterColors again with the first color
            if (counterColors < colors.length) {
                $("body").css("background-color", colors[counterColors], 1000);
                counterColors++;
            } else {
                counterColors = 0;
            }
        }
        //Run function
        changecolors();
    });

    //On click - fade out the image over 3 seconds
    $('#fadeOut').on('click', function () {
        $('#fadeImg').fadeOut(3000)
    });
    //On Click - fade in the image over 3 seconds
    $('#fadeIn').on('click', function () {
        $('#fadeImg').fadeIn(3000)
    });

    //Stop the JQuery effect of color changing 
    $('#stopColorChange').on('click', function () {
        clearInterval(changeColor);
    });

    //Stop the JQuery effect of sliding side to side
    $('#stopAnimation').on('click', function () {
        clearInterval(slideChanger);
        $(".bodyMove").animate({
            'margin-left': '0px'
        })
    });
});