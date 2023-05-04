// 1 task
var enterName = prompt("Enter your name?")
var enterSerName = prompt("Enter yout surName?")

console.log("Hellow", enterName ,enterSerName)


//2 task

var numberOne = prompt('Enter first number ?')
var numberTwo = prompt('Enter second number ?')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

var sum = numberOne + numberTwo
var product = numberOne * numberTwo

console.log(`Число первое ${sum}`)
console.log(`Число втoрое ${product}`)

//3 task

var bankAccountNumber = {
  accountNumber: 235671235612,
  value: 'USD',
  balans: 20000,
  nameOwner: 'Artem Jackovich',
  blocked: false
}


console.log(bankAccountNumber)