const sixthScript = () => {
    $('.button-down').on('click', (e) => {
        $(e.target).parent().next().slideToggle();
        $(e.target).toggleClass('turn');
    });

    $('.song-1-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.song-1-input'), "Красиво");
        }
    });

    $('.song-2-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.song-2-input'), "Знаешь ли ты");
        }
    });

    $('.song-3-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.song-3-input'), "Растолстела");
        }
    });

    $('.song-4-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.song-4-input'), "Никаких больше вечеринок");
        }
    });

    $('.song-5-input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.song-5-input'), "Любимка");
        }
    });

    $('.container-6__list input').on('keydown', (e) => {
        if (e.keyCode !== 13) {
            $(e.target).removeClass('red-wrong');
        }
    });
};

export default sixthScript;