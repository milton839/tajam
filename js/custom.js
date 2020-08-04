$(function(){
    /*======preloader start========*/
    $(window).on('load',function(){
       $('.preloader').delay(500).fadeOut(500); 
    });
    /*======preloader end========*/
    
   /*=======venobox video set======*/
    $('.venobox').venobox();
    
    //======Back-to-top======
    $('.back-to-top').click(function(){
        $('html,body').animate({scrollTop:0},2000) 
    });
    
    $(window).scroll(function(){
       var scrolling = $(this).scrollTop();
        //======back-to-top fade in / fade out
         if(scrolling > 200){
           $('.back-to-top').fadeIn(500);
           }
        else{
            $('.back-to-top').fadeOut(500);
        }
        
        //========stichy menu=======
        if(scrolling > 100){
           $('.header').addClass('bg');
           }
        else{
           $('.header').removeClass('bg');
        }
    });

    
    //========Typed js========
    	$(".typed").typed({
		strings: ["Awesome creative agency.","Awesome creative designers.","Awesome creative Developers.", "Awesome creative People."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});

    //========wow js======
    new WOW().init();
    
   //======feedback slider======
$('.feedback-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  dots:true,
  speed:1500,
  autoplaySpeed: 1500,
});
	 
// background video
//jQuery(".player").YTPlayer();   
    
     // animation scroll js
var html_body = $('html, body');
$('.menu a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 90
            }, 1500);
            return false;
        }
    }
});   
    
    
    
    

    
});