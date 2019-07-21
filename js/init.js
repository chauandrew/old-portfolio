(function($){
  $(function(){

    $('.parallax').parallax();
    $('a').filter(function() { // smooth scroll to local hrefs
      return this.href.match('\#.+'); 
    }).on('click', function(ev) {
        ev.preventDefault();
        var href = $(this).attr('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
