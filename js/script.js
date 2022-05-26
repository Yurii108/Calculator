'use-strict';

window.addEventListener('DOMContentLoaded', function () {
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
                divide = document.querySelector('.divide'),
                multiply = document.querySelector('.multiply'),
                sumAnswer = document.querySelector('.sum_answer'),
                dut = document.querySelector('.dut'),
                del = document.querySelector('.del');

        const allButton = document.querySelectorAll('button');

        let sumDisplay = '';
        let num = '';
        let num2 = '';
        let sum = 0;
        let turn = true;
        let plusTurn = false,
                minusTurn = false,
                divideTurn = false,
                multiplyTurn = false;

        allButton.forEach((item) => {
                item.addEventListener('click', (event) => {
                        event.preventDefault();
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
                        writeNum(item, dut, '.');
                        if (item === del) {
                                if (turn) {
                                        num = '';
                                        display.innerHTML = num;
                                } else {
                                        num2 = '';
                                        display.innerHTML = num2;
                                }
                        }
                        if (item === plus) {
                                turn = false;
                                plusTurn = true;
                        }
                        if (item === minus) {
                                turn = false;
                                minusTurn = true;
                        }
                        if (item === divide) {
                                turn = false;
                                divideTurn = true;
                        }
                        if (item === multiply) {
                                turn = false;
                                multiplyTurn = true;
                        }
                        if (item === allCancel) {
                                location.reload();
                        }
                        if (item === sumAnswer) {
                                if (plusTurn) {
                                        sum = countPlusSum(num, num2);
                                }
                                if (minusTurn) {
                                        sum = countMinusSum(num, num2);
                                }
                                if (divideTurn) {
                                        sum = countDivideSum(num, num2);
                                }
                                if (multiplyTurn) {
                                        sum = countMultiplySum(num, num2);
                                }
                                display.innerHTML = sum;
                        }
                        console.log([+num, +num2, typeof (turn), sum]);
                });
        });

        function writeNum(i, n, c) {
                if (i == n && turn) {
                        num += String(c);
                        display.innerHTML = num;
                }
                if (i == n && !turn) {
                        num2 += String(c);
                        display.innerHTML = num2;
                }

        }

        function countPlusSum(a, b) {
                return Number(a) + Number(b);
        }

        function countMinusSum(a, b) {
                return Number(a) - Number(b);
        }

        function countDivideSum(a, b) {
                return Number(a) / Number(b);
        }

        function countMultiplySum(a, b) {
                return Number(a) * Number(b);
        }
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