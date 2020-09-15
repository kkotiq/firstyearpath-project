import $ from 'jquery';

const thirdScript = () => {
    const a = finalCounter;
    const checkAns = (input, value) => {
        if (input.val().toLowerCase() == value) {
            input.addClass('green-right');
            input.attr('disabled', 'disabled');
            finalCounter = finalCounter + 0.2;
        } else {
            input.addClass('red-wrong');
        }
    };

    $('.building-1-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.building-1-input'), "старая басманная");
        }
    });

    $('.building-2-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.building-2-input'), "мясницкая");
        }
    });

    $('.building-3-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.building-3-input'), "покровский бульвар");
        }
    });

    $('.building-4-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.building-4-input'), "строгино");
        }
    });

    $('.building-5-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.building-5-input'), "шаболовская");
        }
    });

    $('.container-3__list input').on('keydown', (e) => {
        if (e.keyCode !== 13) {
            $(e.target).removeClass('red-wrong');
        }
    });

    if (a !== finalCounter) {
        return finalCounter;
    }
} 

export default thirdScript;
