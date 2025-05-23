'use strict';

const h1 = document.querySelector('h1');
h1.innerHTML = '<h4>nice one</h4>';

// h1.addEventListener('click', () => {
//   h1.style.color = 'gold';
// });

// jquery Syntax
// $ --> access
// (selector) --> which elem to select
// .action() -->  perform a specific task
// --> $(selector).action()

//class selector => '.'
// id selector => '#'
// tag selector => name

$(document).ready(function () {

  $(h1).click(() => $(h1).html('jquery <br> is good'));

});

// mouse events
// click ,dblclick, enter,leave,

// keyboard events
// keypress, keydown, keyup

// clipboard events
// cut,copy , paste

// form events
// change, submit, blur, focus

// document events
// load, resize, scroll, unload

$('#para').mouseover(function () {
  $(this).css("background-color", "blue");
});

$('.btn').on({
  click: () => {
    $("#para").css("color", 'red');
  },
  dblclick: () => $(h1).css('font-size', '3rem')
});
