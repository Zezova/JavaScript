const age2 = 18;
const age3 = 60;

const checkAge = function(age) {
    if (age < age2) {
        console.log("You don't have access cause your age is " + age + " It's less than");
    } else if (age >= age2 && age < age3) {
        console.log("Welcome!");
    } else if (age > age3) {
        console.log("Keep calm and watch Culture channel");
    } else {
        console.log("Technical work");
    }
}
checkAge(17)
checkAge(18)
checkAge(61)