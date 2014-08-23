

var stickyFooter = function($){
    var $win = $(window);
    var $footerTopElement = $('#main');
    var $footer = $('#sticky-footer');
    var $foo = $('.wrapper-footer');

    $footer.height($foo.height());

    var getHeight = function(){
        var paddingFooter = parseInt($footer.css('margin-top'));
        var notFooterHeight = $footerTopElement.offset().top + $footerTopElement.height();

        var isContentLargerThenWindow = (notFooterHeight + $foo.height() + paddingFooter) > $win.height();
        if(isContentLargerThenWindow){
            return $foo.height();
        } else {
            return $win.height() - (notFooterHeight + paddingFooter);
        }
    };

    return function () {
        var height = getHeight();
        $footer.height(height);
    };
}(jQuery);

(function loadStickyFooter($){
    var $win = $(window);
    var $stickyFooter = $('#sticky-footer');

    $win.load(stickyFooter);
    $win.load(function(){
        $stickyFooter.removeClass('invisible').addClass('visible');
    });
    $win.resize(stickyFooter);
}(jQuery));
