$(window).scroll(function(){

    if($(window).scrollTop() > 0){
        $('.navbar').css('background', '#2d272b');
    } else{
        $('.navbar').css('background', 'transparent');
    }
})

//reviews
$('.reviews-sider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
})