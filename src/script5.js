import $ from 'jquery';

const fifthScript = () => {
    const a = finalCounter;
    let counter = 0;
    const container5 = document.querySelector('.container-5');
    const wholePrice = document.querySelector('.container-5__amount');
    const resetButton = document.querySelector('.container-5__reset');
    const allElements = document.querySelectorAll('.element');
    const submitButton5 = document.querySelector('.container-5__submit');

    wholePrice.textContent = counter;

    container5.addEventListener('click', function(e){
        if ((e.target.className == 'price') && !(e.target.parentElement.classList.contains('disabled'))) {
            e.target.parentElement.classList.add('disabled')
            counter = counter + Number(e.target.textContent);
            wholePrice.textContent = counter;
            if (counter > 0) {
                submitButton5.removeAttribute('disabled');
            } 
        } else if ((e.target.className == 'price') && (e.target.parentElement.classList.contains('disabled'))) {
            e.target.parentElement.classList.remove('disabled')
            counter = counter - Number(e.target.textContent);
            wholePrice.textContent = counter;
            if (counter < 10000 && counter !== 0) {
                wholePrice.classList.remove('red');
                wholePrice.classList.remove('bigger');
            } else if (counter == 0) {
                submitButton5.setAttribute('disabled', 'disabled');
            }
        }
    });

    const reset = () => {
        allElements.forEach(element => {
            element.classList.remove('disabled')
            counter = 0;
            wholePrice.textContent = counter;
        })
    }

    resetButton.addEventListener('click', () => {
        reset();
    })


    submitButton5.addEventListener('click', () => {
        if (counter > 10000) {
            wholePrice.classList.add('red');
            wholePrice.classList.add('bigger');
        } else if (counter > 0 && counter <= 10000) {
            container5.innerHTML = 
            `<div class="container5__success">
                <div class="container-5__success-wrapper">
                    <h3>Теперь тусовки — только в общаге...</h3>
                    <p> ...и денег у тебя больше нет. Да и скажу по секрету — это точно не все, что тебе понадобится. 
                    Добро пожаловать в студенчество!</p>
                </div>
            </div>`
            finalCounter++;
        }
    })

    if (a !== finalCounter) {
        return finalCounter;
    }
};

export default fifthScript;