$(document).ready(function(){
    $('.mobile-button').on('click', function(){
        $('.mobile-menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-x');
    })
})

$(document).ready(function(){
    $('.items-list').on('click', function(){
        $('.mobile-menu').toggleClass('active');
        $('.mobile-button').find('i').toggleClass('fa-x fa-bars')
    })
    
})