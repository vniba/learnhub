'use strict';

// animate() --> create custom animation
// animate({param},speed,callback)

$(document).ready(function () {

  // $('#btn').click(() => $('.div').animate({ right: 0 }, 2000));

  // multiple properties
  $('#btn').dblclick(() => {
    $('.div').animate({ right: 0, borderRadius: '50%' }, 1500);
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

  $('#btn').click(() => {

    $('.box').animate({
      height: 'toggle',
    });
  });

  // queue functionality
  $('#btnPlus').click(() => {
    let div = $('.box');
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

    div.animate({ left: '100px' });
  });

});
