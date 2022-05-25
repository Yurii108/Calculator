'use-strict';

// const form = document.querySelector('form');
let display = document.querySelector('.display'),
        allCancel = document.querySelector('.ac'),
        one = document.querySelector('.one'),
        two = document.querySelector('.two'),
        three = document.querySelector('.three'),
        four = document.querySelector('.four'),
        five = document.querySelector('.five'),
        six = document.querySelector('.six'),
        seven = document.querySelector('.seven'),
        eigth = document.querySelector('.eigth'),
        nine = document.querySelector('.nine'),
        zero = document.querySelector('.zero'),
        plus = document.querySelector('.plus'),
        minus = document.querySelector('.minus'),
        sumAnswer = document.querySelector('.sum_answer');

// let input = document.querySelector('input');
const allButton = document.querySelectorAll('button');



let sumDisplay = '';
let num = '';
let num2 = '';
let sum = 0;
let s = '';
allButton.forEach((item) => {
        item.addEventListener('click', (event) => {
                event.preventDefault();
                // if (item == one && s.length === 0) {
                //         num += '1';
                //         display.innerHTML = num;
                // }
                // if (item == one && s.length !== 0) {
                //         num2 += '1';
                //         display.innerHTML = num2;
                // }
                // if (item == two && s.length === 0) {
                //         num += '2';
                //         display.innerHTML = num;
                // }
                // if (item == two && s.length !== 0) {
                //         num2 += '2';
                //         display.innerHTML = num2;
                // }
                writeNum(item, one, 1);
                writeNum(item, two, 2);
                writeNum(item, three, 3);
                writeNum(item, four, 4);
                writeNum(item, five, 5);
                writeNum(item, six, 6);
                writeNum(item, seven, 7);
                writeNum(item, eigth, 8);
                writeNum(item, nine, 9);
                writeNum(item, zero, 0);


                // if (item === allCancel) {
                //         num += 1;
                //         console.log(num);
                // }
                if (item === plus) {
                        // display.innerHTML = Math.floor(num);
                        // sumDisplay += '+';
                        s += 1;

                }
                if (item === allCancel) {
                        // location.reload();
                        display.innerHTML = '';
                        num = 0;
                        num2 = 0;
                        s = '';
                        sum = 0;
                        // setTimeout((display.innerHTML = ''), 2000);

                        // sumDisplay = '';
                }
                if (item === sumAnswer) {
                        // display.innerHTML = sum;
                        sum = countSum(num, num2);
                        display.innerHTML = sum;
                }
                // if (item === one) {
                //         sumDisplay += 1;
                //         display.innerHTML = sumDisplay;

                //         num += "1";
                //         // console.log(sum);
                // }
                // if (item === two) {
                //         sumDisplay += 2;
                //         display.innerHTML = sumDisplay;

                //         num += "2";
                //         // console.log(sum);
                // }

                console.log([+num, +num2, s, sum]);
        });
});

function writeNum(i, n, c) {
        if (i == n && s.length === 0) {
                num += String(c);
                display.innerHTML = num;
        }
        if (i == n && s.length !== 0) {
                num2 += String(c);
                display.innerHTML = num2;
        }
}

function countSum(a, b) {
        return Number(a) + Number(b);
}
// console.log(countSum(num, num2));

// input.addEventListener('click', (event) => {
//         event.preventDefault();
//         let v = input.value;
//         console.log(v);

// });

// let numbers = 0;

// one.addEventListener('click', (event) => {
//         event.preventDefault();
//         numbers = input.value;
//         console.log(numbers);
// });
// two.addEventListener('click', () => {
//         console.log(2);
// });




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