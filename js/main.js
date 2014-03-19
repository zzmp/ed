$(document).ready( function() {

  var $html = $('#html');
  var $css = $('#css');
  var $js = $('#js');
  var $view = $('.ed.view');
  var $style = $('<style></style>');
  var $script = $('<script></script');
  $('body').append($style).append($script);
  var review = function( isHtmlChanged, isCssChanged, isJsChanged ) {
    var updateCss = function() {
      $style.html($css.text());
    };
    var updateHtml = function() {
      $view.html($html.text());
    };
    var updateJs = function() {
      $script.html($js.text());
    };

    if ( isCssChanged ) { updateCss(); }
    if ( isHtmlChanged ) { updateHtml(); }
    if ( isJsChanged ) { updateJs(); }
  }(true, true, true);

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
