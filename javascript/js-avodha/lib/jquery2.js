'use strict';

// show and hide method
$('.btn-h').click(() => $('#h').hide('medium'));

$('.btn-s').click(() => $('#h').show(2000));

//toggle
$('#all').click(() => $('#h').toggle(1000));

// fade
// fadeIn/ fadeOut/ fadeToggle/ fadeTo

$(document).ready(function () {

  // fadeIn
  $('button').click(() => {
    // $('#div1').fadeIn(2000);

    // $('#div2').fadeIn();

    // $('#div3').fadeIn('medium');

    // fadeOut
    // $('#div1').fadeOut(2000);

    // $('#div2').fadeOut();

    // $('#div3').fadeOut('medium');

    // fadeToggle
    // $('#div1').fadeToggle(2000);

    // $('#div2').fadeToggle();

    // $('#div3').fadeToggle('medium');

    // fadeTo
    // $('#div1').fadeTo(2000, 0.5);

    // $('#div2').fadeTo(5000, 0.9);

    // $('#div3').fadeTo('medium', 0.2);

    // ----------
    // $('#div1').fadeOut(2000);

    // $('#div2').fadeToggle(5000);

    // $('#div3').fadeTo('medium', 0.2);
  });


  // slide

  // slideUp/ slideDown/ slideToggle
  $('#bttn').click(() => {
    // $('#slide').slideDown();

    // $('#slide').slideUp();

    $('#slide').slideToggle('slow');


  });

});
