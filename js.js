//store numbers
const data = {
  collectN: [],
  firstNumber: [],
  secondNumber: [],
  resultNumbs: [],
};

//select KB
let calcArea = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operators");
//select display
let display = document.querySelector(".current");

let subDisplay = document.querySelector(".subDisplay");
let result = document.querySelector(".total");
//select operators
let equalAll = document.querySelector(".equal");
let backArrow = document.querySelector(".back");
let decimal = document.querySelector(".point")
//globals

let number;
let numbers;
let convertN;
let fNumb;
let operator;
let resultCalc;
let type;
let currentOperator;

function displayNumb(event) {
  console.log(typeof event);
  result.innerHTML = "";

  if (typeof event === "object") {
    number = event.target.value;
    console.log("da")
  } else {
    number = event;

  }
  numbers = display.innerHTML += number;
  convertN = parseFloat(numbers);
  console.log(convertN)
  //select first Number and push it to the numb array
  data.collectN.push(convertN);

  //first Number
  if (data.resultNumbs.length === 0) {
    fNumb = data.collectN[data.collectN.length - 1];
    console.log(fNumb + "first number");
    console.log(data.collectN);
    data.collectN = [];
  } else {
    console.log(fNumb + " pri ravno ");
  }
}

function displayOperators() {
  currentOperator = event.target.value;

  switch (currentOperator) {
    case "+":
      //push first NUMBER to calc array
      type = "+";
      controlNumbs(fNumb, type);
      operator = "+";

      break;
    case "-":
      //substract
      type = "-";
      controlNumbs(fNumb, type);
      operator = "-";

      break;
    case "*":
      //multiply
      type = "*";
      controlNumbs(fNumb, type);
      operator = "*";

      break;
    case "/":
      //divide
      type = "/";
      controlNumbs(fNumb, type);
      operator = "/";

      break;

    case "CE":
      //Clear
      clearAll();

      break;

    default:
      break;
  }
}

function controlNumbs(fNumb, type) {
  // push Number to Calc Array and display it

  display.innerHTML = "";

  if (data.firstNumber.length == 0) {
    data.firstNumber.push(fNumb);
    console.log("i just push f numb" + fNumb);
    
  } else {
    data.secondNumber.push(fNumb);
    console.log("second number is pushed" + fNumb);
    firstN = data.firstNumber[0];
    secondN = data.secondNumber[0];
    
    calculate(firstN, secondN, operator);
  }
  if (typeof fNumb === "undefined") {
    subDisplay.innerHTML += "";
  } else {
    subDisplay.innerHTML += fNumb + `${type}`;
  }
}

//calculate
function calculate(firstN, secondN, operator) {
  display.innerHTML = "";

  switch (operator) {
    case "+":
      add(firstN, secondN);
      reset();
      break;

    case "-":
      subtract(firstN, secondN);
      reset();
      break;
    case "*":
      multy(firstN, secondN);
      reset();
      break;
    case "/":
      divide(firstN, secondN);
      reset();
      break;

    default:
      break;
  }
}
//check for NaN
function checkNaN() {
  if (isNaN(resultCalc)) {
    resultCalc = parseFloat(result.innerHTML);
    console.log(resultCalc);
  } else {
    result.innerHTML = resultCalc;
   
  }
}
function add(firstN, secondN) {
  resultCalc = firstN + secondN;
  
  console.log(firstN, secondN);
  checkNaN();
  
}

function subtract(firstN, secondN) {
  resultCalc = firstN - secondN;
  checkNaN();
}

function multy(firstN, secondN) {
  resultCalc = firstN * secondN;

  checkNaN();
}

function divide(firstN, secondN) {
  resultCalc = firstN / secondN;

  checkNaN();
}

function equalTotal() {
  let newF = data.firstNumber[0];
  console.log(newF);

  let newS = parseFloat(display.innerHTML);
  console.log(newS);

  switch (type) {
    case "+":
      add(newF, newS);
      resetEq();
      break;

    case "-":
      subtract(newF, newS);
      resetEq();
      break;
    case "*":
      multy(newF, newS);
      resetEq();
      break;
    case "/":
      divide(newF, newS);
      resetEq();
      break;

    default:
      break;
  }
}
function reset() {
  display.innerHTML = "";
  data.firstNumber = [];
  data.secondNumber = [];
  data.firstNumber.push(resultCalc);
  console.log(data.firstNumber);
}

function resetEq() {
  data.firstNumber = [];
  data.secondNumber = [];
  display.innerHTML = "";
  subDisplay.innerHTML = "";
  //push result to array and set first number to result
  data.resultNumbs.push(resultCalc);
  fNumb = data.resultNumbs[data.resultNumbs.length - 1];
  data.resultNumbs = [];
}
function clearAll() {
  (data.collectN = []),
    (data.firstNumber = []),
    (data.secondNumber = []),
    (data.resultNumbs = []),
    (display.innerHTML = "");
  subDisplay.innerHTML = "";
  result.innerHTML = "";
}
function removeLastNumb() {
  if(display.innerHTML !=''){
     let str = display.innerHTML;
     let newStr = str.slice(0, -1);
     display.innerHTML = newStr;
     fNumb = parseFloat(display.innerHTML);
  }else {
    console.log('cant be removed')
  }
}

function decimalPoint(){
  
    // if ( result.innerHTML !== ''){
    //  display.innerHTML=""
    //  } 
  if(display.innerHTML === '' && result.innerHTML === ""){
    display.innerHTML="0."
  }

   if(display.innerHTML.indexOf('.') < 1 && result.innerHTML == '' ){

  display.innerHTML+= "."

  console.log(display.innerHTML.indexOf('.') )
  }
 
}

this.addEventListener("keyup", (e) => {
  calcArea.forEach((element) => {
    if (e.key === element.value) {
      element.classList.remove("hover");
    }
  });
});
this.addEventListener("keydown", (e) => {
  calcArea.forEach((element) => {
    if (e.key === element.value) {
      element.classList.add("hover");
    }
  });

  if (e.key <= 10) {
    displayNumb(e.key);
  }
});
calcArea.forEach((element) => {
  element.addEventListener("click", displayNumb);
});
operators.forEach((el) => {
  el.addEventListener("click", displayOperators);
});
backArrow.addEventListener("click", removeLastNumb);
equalAll.addEventListener("click", equalTotal);
decimal.addEventListener("click" , decimalPoint)

