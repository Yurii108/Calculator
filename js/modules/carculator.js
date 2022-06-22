

function calculator() {
    let display = document.querySelector('.numbers-safe');
    const allCancel = document.querySelector('.ac'),
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
        del = document.querySelector('.del'),
        allButton = document.querySelectorAll('button');

    display.innerText = '0';
    let num = '';
    let numSecond = '';
    let sum = 0;
    let turn = true;
    let plusTurn = false,
        minusTurn = false,
        divideTurn = false,
        multiplyTurn = false;

    console.log(num);
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

            if (num.length === 0) {
                display.innerHTML += 0;
            }

            if (!num.includes('.')) {
                writeNum(item, dut, '.');
            } else {
                writeNum(item, dut, '');
            }

            if (!numSecond.includes('.') && !turn) {
                writeNum(item, dut, '.');
            } else {
                writeNum(item, dut, '');
            }


            if (num.length > 9) {
                num = num.slice(0, 9);
                display.innerHTML += ' Max numbers';
            }
            if (numSecond.length > 9) {
                numSecond = numSecond.slice(0, 9);
                display.innerHTML += ' Max numbers';
            }
            if (item === del) {
                if (turn) {
                    num = num.substring(0, num.length - 1);
                    display.innerHTML = num;
                } else {
                    numSecond = numSecond.slice(0, -1);
                    display.innerHTML = numSecond;
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
                    sum = countPlusSum(num, numSecond);
                }
                if (minusTurn) {
                    sum = countMinusSum(num, numSecond);
                }
                if (divideTurn) {
                    sum = countDivideSum(num, numSecond);
                }
                if (multiplyTurn) {
                    sum = countMultiplySum(num, numSecond);
                }
                display.innerHTML = sum;
            }
            console.log([
                num, + numSecond,
                typeof (turn),
                sum
            ]);
        });
    });

    function writeNum(i, n, c) {
        if (i == n && turn) {
            num += c;
            display.innerHTML = num;

        }
        if (i == n && !turn) {
            numSecond += c;
            display.innerHTML = numSecond;
        }
    }

    const countPlusSum = (a, b) => +a + (+b);
    const countMinusSum = (a, b) => +a - +b;
    const countDivideSum = (a, b) => +a / +b;
    const countMultiplySum = (a, b) => +a * +b;
}

export default calculator;