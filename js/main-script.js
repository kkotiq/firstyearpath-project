const mainScript = () => {
   const mainForwardButton = $('.main-forward');
    const mainBackButton = $('.main-back');

    const mainContainer = $('.main-container');


    mainForwardButton.on('click', function(){
        let visibleElement = mainContainer.find('.task-container:visible');
        if (!visibleElement.hasClass('container-last')) {
            visibleElement.fadeOut();
            setTimeout(() => {
                visibleElement.next().fadeIn();
            }, 500);
        }
    });

    mainBackButton.on('click', function(){
        let visibleElement = mainContainer.find('.task-container:visible');
        if (!visibleElement.hasClass('container-1')) {
            visibleElement.fadeOut();
            setTimeout(() => {
                visibleElement.prev().fadeIn();
            }, 500);
        } 
    })
};

export default mainScript;