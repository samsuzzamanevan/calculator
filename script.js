let result = document.getElementsByClassName('result')[0]

let inputOne = document.getElementById('inputOne')

let inputTwo = document.getElementById('inputTwo')

let operator = document.getElementsByClassName('operator')[0]

let number = document.querySelectorAll('.number')

let plus = document.getElementsByClassName('plus')[0]

let minus = document.getElementsByClassName('minus')[0]

let multiply = document.getElementsByClassName('multiply')[0]

let divition = document.getElementsByClassName('divition')[0]

let equal = document.getElementsByClassName('equal')[0]

let cencel = document.getElementsByClassName('cencel')[0]

let num = 0 ;



inputOne.addEventListener('click',function(){
    num = 0
})
inputTwo.addEventListener('click',function(){
    num = 1
})


number.forEach(function(numbers){
    numbers.addEventListener('click',function(){
        if(num == 0){
            inputOne.value += numbers.textContent
        }
        else if(num == 1){
            inputTwo.value += numbers.textContent
        }
    })
})

cencel.addEventListener('click',function(){
    
     if(num == 0){
        inputOne.value = inputOne.value.slice( 0,inputOne.value.length-1)
     }
     else if(num == 1){
        inputTwo.value = inputTwo.value.slice( 0,inputTwo.value.length-1)
     }
})








plus.addEventListener('click',function(){
    operator.innerHTML = '+'
})
minus.addEventListener('click',function(){
    operator.innerHTML = '-'
})
multiply.addEventListener('click',function(){
    operator.innerHTML = 'X'
})
divition.addEventListener('click',function(){
    operator.innerHTML = '/'
})

equal.addEventListener('click',function(){
    if(operator.innerHTML == '+'){
        result.innerHTML = Number(inputOne.value) + Number(inputTwo.value)
    }
    else if(operator.innerHTML == '-'){
        result.innerHTML = Number(inputOne.value) - Number(inputTwo.value)
    }
    else if(operator.innerHTML == 'X'){
        result.innerHTML = Number(inputOne.value) * Number(inputTwo.value)
    }
    else if(operator.innerHTML == '/'){

            result.innerHTML = Number(inputOne.value) / Number(inputTwo.value)
        }
    }
})
