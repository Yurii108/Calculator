'use-strict';

// const form = document.querySelector('form');
let display = document.querySelector('.display'),
        allCancel = document.querySelector('.ac'),
        one = document.querySelector('.one'),
        two = document.querySelector('.two'),
        plus = document.querySelector('.plus'),
        sumAnswer = document.querySelector('.sum_answer');

// let input = document.querySelector('input');
const allButton = document.querySelectorAll('button');

let sumDisplay = ''; /////////////////committttttttttttttttttttttttttttttttttttt
let sum = 0;
allButton.forEach((item) => {
        item.addEventListener('click', (event) => {
                event.preventDefault();
                // if (item === allCancel) {
                //         num += 1;
                //         console.log(num);
                // }
                if (item === allCancel) {
                        display.innerHTML = 0;
                        sum = 0;
                        sumDisplay = '';
                }
                if (item === sumAnswer) {
                        display.innerHTML = sum;
                }
                if (item === one) {
                        sumDisplay += 1;
                        display.innerHTML = sumDisplay;
                        sum += 1;
                        // console.log(sum);
                }
                if (item === two) {
                        sumDisplay += 2;
                        display.innerHTML = sumDisplay;
                        sum += 2;
                        // console.log(sum);
                }
                if (item === plus) {
                        display.innerHTML = sum;
                        sumDisplay += '+';
                }
                console.log(sum);
        });
});

function countSum(a, b) {
        return a + b;
}

// input.addEventListener('click', (event) => {
//         event.preventDefault();
//         let v = input.value;
//         console.log(v);

// });

let numbers = 0;

// one.addEventListener('click', (event) => {
//         event.preventDefault();
//         numbers = input.value;
//         console.log(numbers);
// });
two.addEventListener('click', () => {
        console.log(2);
});




// function scrollingText(word) {
//         let words = [];

//         for (let i = 0; i < word.length; i++) {
//                 words += word[i];

//                 // words += word[i];
//                 // words.push(w);
//         }
//         return  (words.toUpperCase());
// }
// console.log(scrollingText('robot'));