import $ from 'jquery';
import asyncLooper from './modules/asyncLooper';
import { randomColor, randomNumber } from './modules/random';
import tmplList from './components/List.hbs';

const render = () => {
    const app = $('#app');
    app.html(tmplList({
        list: [{
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
        }],
    }));
};

asyncLooper(render, 1, 100);
