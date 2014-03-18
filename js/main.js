$(document).ready( function() {
  $('#collaborate').on( 'mouseenter', function() {
    $(this).html( '<em>collaborate</em> and listen' );
  });

  $('#collaborate').on( 'mouseleave', function() {
    $(this).text( 'stop' );
  });
});
