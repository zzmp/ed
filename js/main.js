$(document).ready( function() {
  $('#collaborate').on( 'mouseenter', function() {
    $(this).text( 'collaborate and listen' );
  });

  $('#collaborate').on( 'mouseleave', function() {
    $(this).text( 'stop!' );
  });
});
