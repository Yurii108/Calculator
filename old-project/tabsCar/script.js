'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.button'),
        sportCars = document.querySelectorAll('.sport_car'),
        buttonHeader = document.querySelector('.button__header');

    function hadeSportCars() {
        sportCars.forEach(item => {
            item.style.display = 'none';
        });

        buttons.forEach(item => {
            item.classList.remove('active_button');
        });
    }


    function showSportCars(i = 0) {
        sportCars[i].style.display = 'block';
        buttons[i].classList.add('active_button');
    }

    hadeSportCars();
    showSportCars();



    buttonHeader.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('button')) {
            buttons.forEach((item, i) => {
                if (item === target) {
                    hadeSportCars();
                    showSportCars(i);
                }
            });
        }
    });
});

