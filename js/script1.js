 const firstScript = () => {
    // const firstQuestion = $('input[name=first-question');
    // const secQuestion = $('input[name=second-question');
    // const thirdQuestion = $('input[name=third-question');
    // const fourthQuestion = $('input[name=fourth-question');
    // const fifthQuestion = $('input[name=fifth-question');
    // const sixthQuestion = $('input[name=sixth-question');
    // const sevQuestion = $('input[name=seventh-question');

    $('.forward-first-task').on('click', function(){
        let visibleFirstTask = $('.container-1').find('.question-container:visible');
        if (!visibleFirstTask.hasClass('last')) {
            visibleFirstTask.fadeOut(400);
            setTimeout(() => {
                visibleFirstTask.next().fadeIn();
            }, 400);
        }
    });

    $('.back-first-task').on('click', () => {
        let visibleFirstTask = $('.container-1').find('.question-container:visible');
        if (!visibleFirstTask.hasClass('first')) {
            visibleFirstTask.fadeOut();
            setTimeout(() => {
                visibleFirstTask.prev().fadeIn();
            }, 400);
        }
    });

    $('.submit-1').on('click', () => {
            let finalFirstAnswers = Array.from($('.point-1')).filter(answer => answer.checked);
            let finalSecondAnswers = Array.from($('.points-75')).filter(answer => answer.checked);
            let finalThirdAnswers = Array.from($('.points-5')).filter(answer => answer.checked);
            let finalFourthAnswers = Array.from($('.points-25')).filter(answer => answer.checked);
            let testPoints = finalFirstAnswers.length + (finalSecondAnswers.length * 0.75)  + (finalThirdAnswers.length * 0.5) + (finalFourthAnswers.length * 0.25);
            
            if (testPoints >= 0 && testPoints < 2) { 
                $('.container-1').html(
                    `<h2>Наука и образование</h2>
                    <p>Наука бывает скучной, но тренды есть во всех сферах. Следи за Научными боями и конкурсом работ НИРС — может,ты станешь новой научной звездой Вышки! 	</p>`
                );
            } else if (testPoints >= 2 && testPoints < 3) {
                $('.container-1').html(
                    `<h2>Медиа</h2>
                    <p>Поступил на журналистику или медиакоммуникации? Даж если нет, бегом подавай заявки в ТелеВышку, HSE PRESS, The Vyshka. Ты точно должен стать частью медиа-команды!</p>`
                );
            } else if (testPoints >= 3 && testPoints < 4) {
                $('.container-1').html(
                    `<h2>Спорт</h2>
                    <p>Говорят, что в Вышке нет спорта, но это неправда — у нас очень крутой Студенческий спортивный клуб. Даже если тебе кажется, что вы со спортом — две паралелльные, вступай в ССК. Ребята не только устраивают забеги, но и делают крутые конференции, фестивали и развивают спортивную культуру!	</p>`
                );
            } else if (testPoints >= 4 && testPoints < 5) {
                $('.container-1').html(
                    `<h2>Бизнес и карьера</h2>
                    <p>Мы открываем бизнес, мы будем делать бабки. Кейс-клубы и Бизнес-акселератор ждут тебя!	</p>`
                );
            } else if (testPoints >= 5 && testPoints < 6) {
                $('.container-1').html( 
                    `<h2>Добрые проекты</h2>
                    <p>Твоя лучшая черта характера — доброта. Помогай всем, кто нуждается в помощи, вступив в "Открой глаза", или помогай адаптироваться первокурсникам в Вышке вместе с Кураторами НИУ ВШЭ.	</p>` 
                );
            } else {
                $('.container-1').html(
                    `<h2>Ивент</h2>
                    <p>У тебя талант к созданию ивентов — за 4 года в Вышке не упусти шанс мероприятие в Ингруп СтС, провести тренинг в Школе Тренинга или даже организуй шоу талантов XCE FACTOR!	</p>`
                );
            }

        
    });
};

export default firstScript;