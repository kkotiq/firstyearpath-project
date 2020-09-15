const secondScript = () => {
    $('.container-2__input').on('keyup', () => {
        if ($('.container-2__input').val() !== '') {
            $('.container-2__submit').removeAttr('disabled');
        } else {
            $('.container-2__submit').attr('disabled', 'disabled');
        }
    });

    $('.container-2__submit').on('click', (e) => {
        e.preventDefault();
        $('.container-2__input').val('');
        $('.container-2__submit').attr('disabled', 'disabled');
    });
};

export default secondScript;