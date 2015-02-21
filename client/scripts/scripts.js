$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
        }
    else {
        $('nav').removeClass('shrink');
    }
});

$(document).ready(function(){
    $(document).on('click', '.scroll', function() {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    }); 
    });

$(document).ready(function(){
    $(document).on('click', '.aboutscroll', function() {
        $('html, body').animate({scrollTop: 2500}, 1000);
        return false;
    }); 
    });


$(document).ready(function(){
    $(document).on('click', '.skillsscroll', function() {
        $('html, body').animate({scrollTop: 2175}, 1000);
        return false;
    }); 
    });


$(document).ready(function(){
    $(document).on('click', '.projectsscroll', function() {
        $('html, body').animate({scrollTop: 500}, 1000);
        return false;
    }); 
    });


$(document).ready(function(){
    $(document).on('click', '.introscroll', function() {
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    }); 
    });
});