import $ from 'jquery';

import mainScript from './main-script.js';
import firstScript from './script1.js';
import secondScript from './script2.js';
import fourthScript from './script4.js';
import fifthScript from './script5.js';
import sixthScript from './script6.js';
import seventhScript from './script7.js';
import ninthScript from './script9.js';
import eleventhScript from './script11.js';
import thirdScript from './script3.js';

window.finalCounter = 0;

$('.user-points').text(`${finalCounter.toFixed(1)}/10`);

$('.main-forward').on('click', () => {
   $('.user-points').text(`${finalCounter.toFixed(1)}/10`);
});

$('.main-back').on('click', () => {
    $('.user-points').text(`${finalCounter.toFixed(1)}/10`);
});


mainScript();
firstScript();
secondScript();
thirdScript();
fourthScript();
fifthScript();
sixthScript();
seventhScript();
ninthScript();
eleventhScript();



