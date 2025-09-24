function Calculator(number1, number2, operator){
    

    if(operator === "add"){
       return number1 + number2
    }
    if(operator === "subtract"){
       return number1 - number2
    }
    if(operator === "multiply"){
       return number1 * number2
    }
    if(operator === "divide"){
        if(number2 != 0) return number1 / number2
    }
}





function handleClick(){
    let num1 = (document.querySelector('#num1')).value
    let num2 = (document.querySelector('#num2')).value
    let operation = (document.querySelector('#operation')).value
   
    let result = document.querySelector('#result')

    let numberOne = Number(num1);
    let numberTwo = Number(num2);

    result.textContent = Calculator(numberOne, numberTwo, operation)
}

let calculate = document.querySelector('#calculate-btn')
calculate.addEventListener('click', handleClick);

// result = Calculator(numberOne, numberTwo, operation)



// console.log(result);

 


