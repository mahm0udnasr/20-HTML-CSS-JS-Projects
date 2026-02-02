const numberOne = document.querySelector("#number-one");
const numberTwo = document.querySelector("#number-two");
const operation = document.querySelector("#operation");
const calcBtn = document.querySelector("#calc-btn");
const result = document.querySelector("#result span");

calcBtn.addEventListener("click", () => {
  switch (operation.value.toString()) {
    case '+':
      result.innerHTML = +numberOne.value + +numberTwo.value;
      break;
    case '-':
      result.innerHTML = +numberOne.value - +numberTwo.value;
      break;
    case '*':
      result.innerHTML = +numberOne.value * +numberTwo.value;
      break;
    case '/':
      if (+numberTwo.value === 0) {
        result.innerHTML = "can not divide by zero";
        break;
      }
      result.innerHTML = +numberOne.value / +numberTwo.value;
      break;
    default:
      result.innerHTML = "Operation error";
      break;
  }
})