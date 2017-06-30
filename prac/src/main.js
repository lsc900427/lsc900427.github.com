import $ from 'jquery';
import asyncLooper from './modules/asyncLooper';
// const tempHeader = require('./components/Header.hbs');
import tmplist from './components/list.hbs';
import { randomColor, randomNumber } from './modules/random';
// import randomNumber from './modules/random';
// import randomColor from './modules/random';
import styleMain from './assets/css/main.css';
import fL from './components/fruitBox.hbs';
import fruit from './assets/json/fruit.json';


console.log(styleMain);

const render = () => {
    const app = $('#app');
    app.html(tmplist({
        list: [
            {
                color: randomColor(),
                number: randomNumber(0, 255)
            },
            {
                color: randomColor(),
                number: randomNumber(0, 255)
            },
            {
                color: randomColor(),
                number: randomNumber(0, 255)
            },
            {
                color: randomColor(),
                number: randomNumber(0, 255)
            },
            {
                color: randomColor(),
                number: randomNumber(0, 255)
            }
        ],

    }));
    };
console.log(fruit);
console.log(fL);
    const fb = $('.hey');
    fb.html(fL({
        fruit
    }));


asyncLooper(render, 1, 100);

// const app = document.getElementById('app');
// app.innerHTML = '<h1>Hello World</h1>';
