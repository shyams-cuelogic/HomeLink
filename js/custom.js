$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    //For more filter
    $('.search-menu > a').on('click', function() {
        //$('.moreFilter-menu').fadeIn();        
        var moreFilterMenu = $('.moreFilter-menu');
        if (moreFilterMenu.is(':visible')) {
            $(this).next('.moreFilter-menu').fadeOut();
            $(this).parent().removeClass('active');

        } else {
            $(this).next('.moreFilter-menu').fadeIn();
            $(this).parent().addClass('active');
            $('.scroll-pane').jScrollPane();
        }
    });
    $(document).mouseup(function(e) {
       var moreFilterMenu = $('.moreFilter-menu');
        
        if (moreFilterMenu.has(e.target).length === 0) {
            moreFilterMenu.fadeOut();
            $('.search-menu').removeClass('active');            
        }
    });


    $(":checkbox").on('click', function() {
        $(this).parent().toggleClass("checked");
    });

    //For Map View
    mapviewH();
    $(window).resize(function() {
        mapviewH();
        $('.scroll-pane').jScrollPane({ showArrows: true });
    });
    $('.scroll-pane').jScrollPane({ showArrows: true });
});

function mapviewH() {
    var windowH = $(window).height();
    var headerH = $('#header').height();
    var filterrH = $('#filter-section').height();
    var mapViewH = windowH - headerH - filterrH;
    $('#mapView').css('height', mapViewH);
    $('#mapView .scroll-pane').css('height', mapViewH - 47);
}
