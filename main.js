console.log("First Load of Page");

$(document).ready(function () {

    //Reload page if logo clicked
    $('#titleLogo').on('click', function () {
        location.reload();
    });

    //Return to Initial state
    $('#homeBtn').on('click', function () {
        $('#pageOne').removeClass('hidden');
        $('#buildPage').addClass('hidden');
    });

    //Reveal Construct section and hide others
    $('#constBtn').on('click', function () {
        if (window.innerWidth >= 581) {
            $('#pageOne').addClass('hidden');
            $('#buildPage').removeClass('hidden');
        } else {
            swal("Please use a larger screen to perform this action.");
        }
    });

    //Close hamburger menu if user clicks off of it while opened
    $(".page").on('click', function () {
        if ( $('#hamButton').attr('aria-expanded') === 'true' ) {
            console.log('test');
            $('#hamButton').trigger('click');
        }
    });

    //Background color change on mouse enter navbar
    $('#navMain').on({
        mouseenter: function () {
            $(this).css("background-color", "rgb(255, 165, 0, 0.75)");
        },
        mouseleave: function () {
            $(this).css("background-color", "rgb(255, 165, 0, 0.25)");
        }
    });

    $('#galleryOne').scrollLeft(50);
    $('#galleryTwo').scrollLeft(300);
    $('#galleryThree').scrollLeft(550);

    //Match function for Construct Section
    function sizeListener (size) {
        if (size.matches && $('#buildPage').hasClass('hidden') === false) {
            $('#homeBtn').trigger('click');
            swal("Please use a larger screen to perform this action.");
            console.log('test');
        }
    }

    //Create the object that reports window size
    const mediaObj = window.matchMedia("(max-width: 581px)");

    //Call the function on page lage
    sizeListener(mediaObj);

    //Create dynamic listener
    mediaObj.addEventListener('change', sizeListener);
});