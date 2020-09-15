import $ from 'jquery';

const eleventhScript = () => {

    const a = finalCounter;
    const answersArr = [
        'Тусил на концерте NILETTO, не успел доехать до дома с интернетом.',
        'Тусил на концерте Cream Soda, не успел доехать до дома с интернетом.',
        'Ходил за пропуском, очередь была большая',
        'Записывал ток-шоу, в студии интернет не ловит',
        'ЛМС слетел',
        'Кот сел на клавиатуру и удалил документ',
        'Думал, что дедлайн завтра',
        'Дома выбило пробки',
        'Выполнял дз по БЖД, не успел',
        'Дату в ежедневнике перепутал',
        'В общаге заблудился'
    ];

    $('.container-11__generate').on('click', () => {
        let randomNumber = Math.floor(Math.random() * (11 - 0) + 0);
        $('.container-11__result').html(`
            <p class="container-11__generate_in-process"> Генерируем...</p>
        `);
        setTimeout( () => {
            let result11 = answersArr[randomNumber];
            $('.container-11__result').html(`
                <p class="container-11__generate_done"> ${result11}</p>
            `);
        }, 1500);
        finalCounter++;
    });

    if (a !== finalCounter) {
        return finalCounter;
    }
};

export default eleventhScript;
