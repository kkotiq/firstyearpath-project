import $ from 'jquery';

if (localStorage.getItem('done') == null) {
    $('.popup-start').fadeIn();
} else {
    $('.popup-finish').fadeIn();
    $('.main-button-container').html('');
    $('.popup-finish__message-results').html(`
        Твоя оценка: ${localStorage.getItem('result')} <br><br>
        ${localStorage.getItem('result-text')}
    `);
}

$('.popup-start__close').on('click', () => {
    $('.popup-start').fadeOut();
});

$('.global-finish').on('click', () => {
    localStorage.setItem('done','done');
    $('.popup-finish').fadeIn();
    $('.main-button-container').html('');
    let resultText = '';
    if (finalCounter >= 8) {
        resultText = 'Ты точно не родственник Кузьминова? В Вышке ты уже как “рыба в воде”. Заскринь свой результат и отправь вместе с данными (ФИО, ОП, номер группы и ссылкой на VK) на нашу почту <a href="mailto:firstyearpath@gmail.com">firstyearpath@gmail.com</a>. Первые 10 первокурсников с высшим баллом получат призы от наших партнеров!';
    } else if (finalCounter >= 6 && finalCounter < 8) {
        resultText = 'Почти отлично! Поздравляем, тебе осталось всего ничего для того, чтобы стать настоящим вышкинцем! Удачи тебе на первом курсе и в дальнейшей учебе от Ингруп СтС.'
    } else if (finalCounter >= 4 && finalCounter < 6) {
        resultText = 'Ну, всё не так плохо — ты уже знаешь, что такое дедлайн, но детали нужно подучить! Удачи тебе на первом курсе и в дальнейшей учебе от Ингруп СтС.'
    } else if (finalCounter >= 0 && finalCounter < 4) {
        resultText ='Пересдача! Кажется, тебе стоит бежать к куратору и разбираться с Вышкой, иначе будет тяжело! Удачи тебе на первом курсе и в дальнейшей учебе от Ингруп СтС.'
    }
    $('.popup-finish__message-results').html(`
        Твоя оценка: ${finalCounter.toFixed(1)} <br><br>
        ${resultText}
    `);
    localStorage.setItem('result', finalCounter.toFixed(1));
    localStorage.setItem('result-text', resultText);
});
