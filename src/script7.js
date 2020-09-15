import $ from 'jquery';

const seventhScript = () => { 
    const a = finalCounter;

    $('.container-7 .answers').on('click', (e) => {
        if (e.target.tagName == "LABEL") {
            if ($(e.target).children().hasClass('quiz__ra')) {
                $(e.target).addClass('green-right');
                finalCounter = finalCounter + 0.2
            } else {
                $(e.target).addClass('red-wrong');
            }

            let visibleQuestionQuiz = $('.container-7').find('.quiz-container:visible');
            if (!visibleQuestionQuiz.hasClass('last')) {
                setTimeout(() => {
                    visibleQuestionQuiz.fadeOut(500);
                }, 400);
                setTimeout(() => {
                    visibleQuestionQuiz.next().fadeIn();
                }, 900);
            } else {
                const quizPoints = $('.container-7').find('.green-right').length;
                visibleQuestionQuiz.fadeOut(700);
                setTimeout(() => {
                    if (quizPoints >= 0 && quizPoints <= 3) {
                        $('.container-7').html(
                            `<h3>Пересдача!</h3>`
                        );
                    } else if (quizPoints >= 4 && quizPoints <= 5) {
                        $('.container-7').html(
                            `<h3>Оценка: удовлетворительно</h3>`
                        );
                    } else if (quizPoints >= 6 && quizPoints <= 7) {
                        $('.container-7').html(
                            `<h3>Оценка: хорошо</h3>`
                        );
                    } else {
                        $('.container-7').html(
                            `<h3>Оценка: отлично</h3>`
                        );
                    }
                }, 700);
            }
        }
    });
    
    if (a !== finalCounter) {
        return finalCounter;
    }
};

export default seventhScript;