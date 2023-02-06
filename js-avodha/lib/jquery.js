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

  $('#para').dblclick(function () {
    $(this).html('Dolore necessitatibus maiores deleniti nesciunt est.');
  });
});
