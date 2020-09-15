import $ from 'jquery';
 
const ninthScript = () => {  
    const a = finalCounter;

    const ranges = $('.container-9__range');
    const rangeAnswers = [15, 59, 1759, 1172, 110, 5, 11];


    Array.from(ranges).forEach(range => {
        $(range).next().text($(range).val());
    });

    ranges.on('change', (e) => {
        $(e.target).next().text($(e.target).val())
    });

    ranges.on('mousemove', (e) => {
        $(e.target).next().text($(e.target).val())
    });

    let rangeAttempts = 0;

    $('.container-9__submit-button').on('click', () => {
        rangeAttempts++;

        if (rangeAttempts < 3) {
            Array.from(ranges).forEach(range => {
                if (($(range).attr('id') !== '5') 
                    && ((Number($(range).val()) >= rangeAnswers[($(range).attr('id'))] - 1) 
                        && (Number($(range).val()) <= rangeAnswers[($(range).attr('id'))] + 1))) {
                    $(range).next().addClass('green');        
                } else if ($(range).attr('id') == '5') {
                    $(range).next().addClass('green');
                } else {
                    $(range).next().removeClass('green');
                    $(range).next().addClass('red');
                }
            });
        
            if ($('.green').length == 7) {
                finalCounter++;
                $('.container-9').html(
                    `<h3>Все верно!</h3>`
                );
            }
        } else {
            $('.container-9').html(
                `<h3>Попытки кончились...</h3>`
            );
        }
    });

    if (a !== finalCounter) {
        return finalCounter;
    }
};

export default ninthScript;