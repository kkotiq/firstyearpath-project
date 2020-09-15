const localStorageManage = () => {
    if (localStorage.getItem('done') == null) {
            $('.popup-start').fadeIn();
    } else {
            $('.popup-finish').fadeIn();
    }

        $('.popup-start__close').on('click', () => {
            $('.popup-start').fadeOut();
        });

        $('.global-finish').on('click', () => {
            localStorage.setItem('done','done');
            $('.popup-finish').fadeIn();
        });
}

export default localStorageManage;