import $ from 'jquery';

const mainScript = () => {
   const mainForwardButton = $('.main-forward');
    const mainBackButton = $('.main-back');

    const mainContainer = $('.main-container');

    mainForwardButton.on('click', () => {
        let visibleElement = mainContainer.find('.task-container:visible');
        if (!visibleElement.hasClass('container-last')) {
            visibleElement.fadeOut();
            setTimeout(() => {
                visibleElement.next().fadeIn();
            }, 500);
        }
    });

    mainBackButton.on('click', () => {
        let visibleElement = mainContainer.find('.task-container:visible');
        if (!visibleElement.hasClass('container-first')) {
            visibleElement.fadeOut();
            setTimeout(() => {
                visibleElement.prev().fadeIn();
            }, 500);
        } 
    })
};

export default mainScript;