$(document).ready( function() {

  var $html = $('#html');
  var $css = $('#css');
  var $js = $('#js');
  var $view = $('.ed.view').contents().find('body');
  var $style = $('<style></style>');
  var $script = $('<script></script');
  $view = $view.append($style).append($script).append('<main></main>')
               .find('main');
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
  };
  review(true, true, true);

  $('#html').change( function() { review( true, false, false ); } );
  $('#css').change( function() { review( false, true, false ); } );
  $('#js').change( function() { review( false, false, true ); } );

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
