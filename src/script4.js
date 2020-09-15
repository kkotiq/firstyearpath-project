import $ from 'jquery';

const fourthScript = () => {
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

    $('.sop input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.sop input'), "студенческая оценка преподавания");
        }
    });

    $('.bzd input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.bzd input'), "безопасность жизнедеятельности");
        }
    });

    $('.lms input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.lms input'), "learning management system");
        }
    });

    $('.iup input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.iup input'), "индивидуальный учебный план");
        }
    });

    $('.pud input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAns($('.pud input'), "программа учебных дисциплин");
        }
    });


    $('.abbr-list input').on('keydown', (e) => {
        if (e.keyCode !== 13) {
            $(e.target).removeClass('red-wrong');
        }
    });
    
    if (a !== finalCounter) {
        return finalCounter;
    }
};

export default fourthScript;