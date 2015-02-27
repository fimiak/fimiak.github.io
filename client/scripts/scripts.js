$(document).ready(function () {

    
$(document).scroll(function() {
    if($(document).scrollTop() > 40) {
        $('nav').addClass('shrink');
        }
    else {
        $('nav').removeClass('shrink');
    }
});

$(document).ready(function(){
    $(document).on('click', '.home', function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    }); 
    });

$(document).ready(function(){
    $(document).on('click', '.scroll', function() {
        $('html, body').animate({scrollTop: 41}, 600);
        return false;
    }); 
    });


$(document).ready(function(){
    $(document).on('click', '.about', function() {
        $('html, body').animate({scrollTop: 3000}, 600);
        return false;
    }); 
    });
});