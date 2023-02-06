'use strict';

// show and hide method
$('.btn-h').click(() => $('#h').hide('medium'));

$('.btn-s').click(() => $('#h').show(2000));

//toggle
$('#all').click(() => $('#h').toggle(1000));

