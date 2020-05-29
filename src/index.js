import $ from 'jquery';

import config from './config';
import './main.scss';

const output = $('#output');
const input = $('#input');

let currentRoom = 'start';

function outputAppend(text) {
    output.append(`<span class="output-line">${text}</span>`);
    $(window).scrollTop($('body').height());
}

function printRoomText() {
    outputAppend(config[currentRoom].text);
}

printRoomText();

input.on('blur',function () {
    let blurEl = $(this);
    setTimeout(function() {
        blurEl.focus();
    }, 10);
});

$(document).keypress(e => {
    if (e.charCode === 13) { // Enter
        if (input.val() === 'clear') {
            output.html('');
            input.val('');
            printRoomText();
        } else if (config[currentRoom].options[input.val()] === undefined) {
            // outputAppend(`Invalid option. The valid options are ${Object.keys(config[currentRoom].options)}`);
            outputAppend(`Invalid option. The valid options are ${Object.keys(config[currentRoom].options).map(v => ' <b>' + v + '</b>')}`);
        } else {
            currentRoom = config[currentRoom].options[input.val()];
            input.val('');
            printRoomText();
        }
    }
});
