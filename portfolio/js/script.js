

$(document).ready('.page-scroll').on('click',"a", function(event){

    //ambil isi href
    var tujuan = ($(this).attr('href'));
    // tangkap tujuan ysb
    var elementTujuan = $(tujuan);

    //pindah scroll
    $('html,body').animate({
        scrollTop: elementTujuan.offset().top -50
    },1000, 'easeInOutExpo');

    event.preventDefault();
});


//parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    })

    // portfolio
    if(wScroll > $('.portfolio').offset().top -250) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul')
            }, 200 * (i+1));
        });
        
    };

});

$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});
