const $ = require('jquery');

const sayHello = () => {
    console.log("Hi, everybody!");
}

sayHello();
console.log("omg, ed6 in old browsers");


$('h1').css('background-color', 'blue');

${"body"}.append("<h1>ALIENS ARE REAL!</h1>");



const saySomeNice = require('./src/say-hello.js');

console.log(saySomeNice());
