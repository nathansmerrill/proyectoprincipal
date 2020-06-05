import $ from 'jquery';

import config from './config';
import './main.css';

const output = $('#output');
const input = $('#input');

let currentRoom = 'start';

function outputAppend(text) {
    output.append(`<span class="output-line">${text}</span>`);
    $(window).scrollTop($('body').height());
}

function printRoomText() {
    let text = config[currentRoom].text;
    if (typeof text === 'function') {
        text = text();
    }
    outputAppend(text);
}

outputAppend(`Bienvenido a mi proyecto principal, que es un juego adventura de texto. 
Para continuar, escribas una de las opciones <b>negritas</b>. A calquier tiempo, 
escriba <b>quitar</b> para borrar la pantalla. Buena suerte!<br><br>`);
printRoomText();

input.on('blur',function () {
    let blurEl = $(this);
    setTimeout(function() {
        blurEl.focus();
    }, 10);
});

$(document).keypress(e => {
    let options = config[currentRoom].options;
    if (typeof options === 'function') {
        options = options();
    }
    if (e.charCode === 13) { // Enter
        if (input.val() === 'borrar') {
            output.html('');
            input.val('');
            printRoomText();
        } else if (options[input.val()] === undefined) {
            // outputAppend(`Invalid option. The valid options are ${Object.keys(config[currentRoom].options)}`);
            outputAppend(`Invalid option. The valid options are ${Object.keys(options).map(v => ' <b>' + v + '</b>')}`);
        } else {
            let option = options[input.val()];
            if (typeof option === 'function') {
                option = option();
            }
            currentRoom = option;
            outputAppend('> ' + input.val());
            input.val('');
            printRoomText();
        }
    }
});
