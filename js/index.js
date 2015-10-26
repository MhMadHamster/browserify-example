var $ = require('jquery'),
    square = require('./modules/square.js'),
    cube = require('./modules/cube.js');

$('body').append('<p>' + cube(square(2)) + '</p>');