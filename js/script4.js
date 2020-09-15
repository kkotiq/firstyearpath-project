import $ from 'jquery';

const fourthScript = () => {

    $('.sop input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.sop input'), "Студенческая оценка преподавания");
        }
    });

    $('.bzd input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.bzd input'), "Безопасность жизнедеятельности");
        }
    });

    $('.lms input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.lms input'), "Learning management system");
        }
    });

    $('.iup input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.iup input'), "Индивидуальный учебный план");
        }
    });

    $('.pud input').on('keyup', (e) => {
        if (e.keyCode == 13) {
            checkAbbr($('.pud input'), "Программа учебных дисциплин");
        }
    });


    $('.abbr-list input').on('keydown', (e) => {
        if (e.keyCode !== 13) {
            $(e.target).removeClass('red-wrong');
        }
    });
};

export default fourthScript;