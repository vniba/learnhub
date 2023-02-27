'use strict';

// animate() --> create custom animation
// animate({param},speed,callback)

$(document).ready(function () {
  // $('#btn').click(() => $('.div').animate({ right: 0 }, 2000));
  // multiple properties
  /*  $("#btn").dblclick(() => {
    $(".div").animate({ right: 0, borderRadius: "50%" }, 1500);
  });

  // properties should be camelCase 🐪
  // no color Property --> in core jquery

  //relative values
  // $('#btn').click(() => {
  //   $('.box').animate({
  //     left: '+=100px',
  //   }, 1000);
  // });

  // $('#btnPlus').click(() => {
  //   $('.box').animate({ bottom: '-=100px' }, 1000);
  // });

  // predefined values

  $("#btn").click(() => {
    $(".box").animate({
      height: "toggle",
    });
  });

  // queue functionality
  $("#btnPlus").click(() => {
    let div = $(".box");
    // div.animate({
    //   height: '100px',
    // }, 1000);

    // div.animate({
    //   width: '100px'
    // }, 1000);

    // div.animate({
    //   width: '50px'
    // }, 1000);

    // div.animate({
    //   height: '50px'
    // }, 1000);

    div.animate({ left: "100px" });
  }); */
  /*   $('#btn').click(() => {
    $('p').html(
      '<h3>Blanditiis</h3> est quia. Velit assumenda aut ut dolorem odit omnis dicta. A dignissimos aut accusamus accusantium eius. Asperiores veritatis molestiae.'
    ); */
  /*  $('#btn').click(() => {
    $('#name').val('modified');
  }); */

  // callback
  /*  $('#btn').click(() => {
    // $('#param').text((i, oText) => {
    //   return oText + i;
    // });
    $('a').attr('href', (i, val) => {
      return (val = 'http://localhost:5050');
    });
  }); */

  const pr = 'prepend ';

  $('#btn').click(() => {
    // $('h2').append(' <p>append method</p>');
    // $('h2').prepend(pr);
    // $('h2').after(`<p>after</p>`);
    // $('h2').before(`<p>before</p>`);
  });

  // removing element
  $('#btn').click(() => {
    // $('div').remove();
    // $('div').empty();
    // $('p').remove('.first');
  });

  // Adding Classes
  // $('#btn').click(() => {
  //   $('p').addClass('dark ');
  //   $('.first').addClass('danger light');
  // });
  // // Remove, toggle
  // $('#btn2').click(() => {
  //   $('.first').removeClass('dark');
  //   $('.first').toggleClass('danger');
  // });

  // css
  $('#btn').click(() => {
    // $('.first').css('backgroundColor', 'greenyellow');
    $('.first').css({ color: 'aqua', backgroundColor: 'gray' });
  });
});
