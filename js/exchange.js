const inputUAH = document.querySelector('.UAH'),
        inputEUR = document.querySelector('.EUR');

    inputUAH.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        request.open('GET', 'js/current1.json');
        request.setRequestHeader('content-type', 'application/json', 'charset = UTF-8');
        request.send();

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                const data = JSON.parse(request.response);
                inputEUR.value = +inputUAH.value * data.current.eur;
            } else {
                inputEUR.value = 'Error - Что-то случилось, попробуйте через 1 час';
            }
        });
    });