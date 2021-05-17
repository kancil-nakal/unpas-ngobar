

$(document).ready('.page-scroll').on('click',"a", function(event){
    
    //ambil href
    var link = ($(this).attr('href'));
    // tangkap tujuan
    var elementLink = $(link);

    //pindah scroll
    $('html,body').animate({
        scrollTop: elementLink.offset().top -50
    }, 1000, 'easeInOutExpo');

    event.preventDefault();
});