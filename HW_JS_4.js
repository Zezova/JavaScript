//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
const age2 = 18;
const age3 = 60;
const checkAge = function(age) {
if (age && !isNaN(age)) {
    if (age < age2) {
        alert("You don't have access cause your age is " + age + " It's less than");
    } else if (age >= age2 && age < age3) {
        alert("Welcome!");
    } else if (age > age3) {
        alert("Keep calm and watch Culture channel");
    } else {
        alert("Technical work");
    }
} else alert("Not an integer value")
}
let a = prompt("Enter your age")
checkAge(a)

