// 제가한 게 아닙니다... 구글의 도움을 아주 많이 받았습니다...

const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.input');
const numBtn = document.querySelectorAll('.numBtn');

let inputOperator = '';
let prevValue = '';
let nextValue = '';

const calculate = (n1, operator, n2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = Number(n1) + Number(n2);
      break;
    case '-':
      result = Number(n1) - Number(n2);
      break;
    case 'x':
      result = Number(n1) * Number(n2);
      break;
    case '/':
      result = Number(n1) / Number(n2);
      break;
    default:
      break;
  }
  return String(result);
};

const calculator = () => {
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      console.log('button click');
      let action = event.target.classList[0];
      let click = event.target.value;
      let isFirstValue = true;

      console.log(action);
      console.log(click);

      if (isFirstValue && action === 'operator') {
        inputOperator = click;
        prevValue = display.textContent;
        display.textContent = '';
      }

      if (action === 'numBtn') {
        if (prevValue.click === '0') {
          return;
        }
        if (display.textContent === ' ' && inputOperator === '') {
          display.textContent = click;
          prevValue = display.textContent;
        }

        if (display.textContent !== ' ' && inputOperator === '') {
          display.textContent = display.textContent + click;
          prevValue = display.textContent;
        }

        if (display.textContent === ' ' && inputOperator !== '') {
          display.textContent = click;
          nextValue = display.textContent;
        }

        if (display.textContent !== ' ' && inputOperator !== '') {
          display.textContent = display.textContent + click;
          nextValue = display.textContent;
        }
        isFirstValue = false;
      }
      if (action === 'result') {
        display.textContent = calculate(prevValue, inputOperator, nextValue);
      }

      if (action === 'ac') {
        prevValue = '';
        inputOperator = '';
        nextValue = '';

        display.textContent = '';
      }
    });
  });
};

calculator();
