import $ from 'jquery';

const secondScript = () => {
    const a = finalCounter;
    let submitCounter = 0;
    $('.container-2__input').on('keyup', () => {
        if ($('.container-2__input').val() !== '') {
            $('.container-2__submit').removeAttr('disabled');
        } else {
            $('.container-2__submit').attr('disabled', 'disabled');
        }
    });

    $('.container-2__form').on('submit', () => {
        sendAjaxForm('ajax_form', '../action.php');
        return false;
    });

    const sendAjaxForm = (ajax_form, url) => {
        $.ajax({
            url: url, //url страницы 
            type: "POST", //метод отправки
            dataType: "html", //формат данных
            data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
            success: function(response) { //Данные отправлены успешно
                $('.container-2__input').val('');
                $('.container-2__submit').attr('disabled', 'disabled');
                submitCounter++;
                if (submitCounter == 1) {
                    return finalCounter++;
                }
            },
            error: function(response) { // Данные не отправлены
                alert('Ошибка');
            }
         });
    }

    if (a !== finalCounter) {
        return finalCounter;
    }
};

export default secondScript;