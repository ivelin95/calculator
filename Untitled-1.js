//store numbers 
const data = {
    numb: [],
    calcNumb:[],
    totalResult:[]
  }
  
  
  //select KB
  let calcArea = document.querySelectorAll('.number')
  let operators = document.querySelectorAll('.operators')
  //select display
  let display = document.querySelector('.current');
  
  let subDisplay = document.querySelector('.subDisplay')
  let result = document.querySelector(".total")
  //select operators
  let equalAll = document.querySelector('.equal')
  
  //globals
  
  let number;
  let numbers;
  let convertN;
  let fNumb;
  let operator;
  let resultCalc;
  let type;
  let currentOperator;
  let firstN;
  let secondN;
  
  function displayNumb(event) {
    result.innerHTML=''
    number = parseInt(event.target.value);
    numbers=display.innerHTML+=number;
    convertN = parseInt(numbers)
      //select first Number and push it to the numb array
      data.numb.push(convertN)
  
      //first Number
      fNumb= data.numb[data.numb.length-1]
      console.log(fNumb)
   
  }
   
  function displayOperators(){
     currentOperator = event.target.value
    
    
    switch (currentOperator) {
      case "+":
        //push first NUMBER to calc array
         type = "+"
         
         controlNumbs(fNumb , type)
         operator = "+"
               
      
        break;
      case "-":
        //substract
        type = "-"
         controlNumbs(fNumb , type)
         operator = "-"
        
        break;
      case "*":
        //multiply
        type = "*"
         controlNumbs(fNumb , type)
         operator = "*"
        
        break;
      case "/":
          //divide
          type = "/"
         controlNumbs(fNumb , type)
         operator = "/"
          
          break;   
     
           case "C":
          //Clear
         
          break; 
         
         
      default:
        break;
    }
  }
  function controlNumbs(fNumb, type){
    console.log(fNumb,type)
    //erase the numbers from array and push the first N to cacl array
    data.numb=[]
    console.log(data)
    display.innerHTML=''
        subDisplay.innerHTML+=fNumb + `${type}`
    data.calcNumb.push(fNumb)
    console.log(data.calcNumb.length)
    if (data.calcNumb.length >= 2 ) {
        firstN = data.calcNumb[0];
        secondN = data.calcNumb[data.calcNumb.length-1];
        
        console.log(firstN,secondN)
        calculate(firstN , secondN ,type)
    }
    
  }
  function calculate(firstN,secondN ,type ){
      
    switch (type) {
      case "+" :
       add(firstN,secondN)
       reset()
       break;
  
      case "-":
        subtract(firstN,secondN)
        reset()
        break;
        case "*":
          multy(firstN,secondN)
          reset()
          break;
          case "/":
            divide(firstN,secondN)
            reset()
            break;
         case "=":
            equalTotal(firstN,secondN , type  )
            break;
      default:
        break;
    }
  }
  function reset(){
     data.calcNumb=[]
       data.calcNumb.push(resultCalc)
  }
  function add(firstN,secondN){
    resultCalc = firstN + secondN
    console.log(resultCalc + "result")
    result.innerHTML = resultCalc
    data.totalResult[0]=resultCalc
     }
  function subtract(firstN,secondN){
    resultCalc = firstN - secondN
    result.innerHTML = resultCalc
    data.totalResult[0]=resultCalc
  }
  function multy(firstN,secondN){
    resultCalc = firstN * secondN
    result.innerHTML = resultCalc
    data.totalResult[0]=resultCalc
  }
  function divide(firstN,secondN){
    resultCalc = firstN / secondN
    result.innerHTML = resultCalc
    data.totalResult[0]=resultCalc
  }
  
  function equalTotal(firstN,secondN , type){
    console.log(firstN,secondN , type)
    switch (type) {
      case "+" :
       add(firstN,secondN)
       reset()
       break;
  
      case "-":
        subtract(firstN,secondN)
        reset()
        break;
        case "*":
          multy(firstN,secondN)
          reset()
          break;
          case "/":
            divide(firstN,secondN)
            reset()
            break;
        
      default:
        break;
    }
  
  }
  calcArea.forEach(element => {
    element.addEventListener("click", displayNumb);
  });
  operators.forEach(el =>{
    el.addEventListener('click', displayOperators)
  })
  equalAll.addEventListener('click',equalTotal )
  //plus.addEventListener('click', add)
  //minus.addEventListener("click", subtract)