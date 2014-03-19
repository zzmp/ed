$(document).ready( function() {
  

  var uncover = function() {
    var $cover = $('.cover');

    $cover.find( 'img' ).animate(
      { borderSpacing: -720 },
      {
        step: function( now, fx) {
          $(this).css( '-webkit-transform', 'rotate(' + now + 'deg)' );
          $(this).css( '-moz-transform', 'rotate(' + now + 'deg)' );
          $(this).css( 'transform', 'rotate(' + now + 'deg)' );
        },
        duration:'slow'
      }
    );

    $.when( $cover.find( 'img' ).promise() ).then( function() {
      $cover.animate( {left: '100%'}, 2000, '', function() {
        $('footer').show();
      });
    });
  }

  $(window).one( 'scroll', uncover );
});
