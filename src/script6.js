import $ from 'jquery';

const sixthScript = () => {
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
    
    $('.button-down').on('click', (e) => {
        $(e.target).parent().next().slideToggle();
        $(e.target).toggleClass('turn');
    });

    $('.song-1-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.song-1-input'), "красиво");
        }
    });

    $('.song-2-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.song-2-input'), "знаешь ли ты");
        }
    });

    $('.song-3-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.song-3-input'), "растолстела");
        }
    });

    $('.song-4-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.song-4-input'), "никаких больше вечеринок");
        }
    });

    $('.song-5-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.song-5-input'), "любимка");
        }
    });

    $('.container-6__list input').on('keydown', (e) => {
        if (e.keyCode !== 13) {
            $(e.target).removeClass('red-wrong');
        }
    });

    if (a !== finalCounter) {
        return finalCounter;
    }
};

export default sixthScript;