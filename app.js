// Chapter 31 - 34 (Date & Time)

// Q1

let dObj = new Date();

// Q2

let dStr = new Date().toString();

// Q3

let day = new Date(d).getDay();

// Q4

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
alert(dayNames[d]);

// Q5

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let dayOfMonth = currentDate.getDate();
let dayOfWeek = currentDate.getDay();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let second = currentDate.getSeconds();

// Q6

let later = new Date(2020, 11, 0);

// Q7

let dateObj = new Date(1992, 1, 2);

// Q8

alert((new Date(1980, 0, 1)).getTime());

// Q9

currentDate.setFullYear(newYear);

//  Q10

function changeToJanuary(date) {
    date.setMonth(0);
    return date;
}

// Q11

----

// Q12

function changeMinutesOfTime(time) {
    let newMinutes = prompt("Enter the new minute value:");
    if (newMinutes === null) return "Operation canceled";
    
    time.setMinutes(parseInt(newMinutes));
    return time;
}

// Q13

function addHoursToTime(time, hoursToAdd) {
    time.setHours(time.getHours() + hoursToAdd);
    return time;
}

// Q14

function calculateAge(birthDate) {
    let birthDateObj = new Date(birthDate);
    let currentDate = new Date();
    let difference = currentDate.getTime() - birthDateObj.getTime();
    let age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    return age;
}
let birthDate = prompt("Enter your birth date (YYYY-MM-DD):");
if (birthDate === null) {
    console.log("Operation canceled.");
} else {
    let age = calculateAge(birthDate);
    console.log("Your age is:", age);
}

// Chapter 35 - 37 (Functions)

// Q1

function displayAlert() {}

// Q2

function askName() {
    let userName = prompt("Enter name:");
    return userName;
}

// Q3

function callTwoFunctions() {
    functionOne();
    functionTwo();
}

function functionOne() {
    console.log("Function One called.");
}

function functionTwo() {
    console.log("Function Two called.");
}

callTwoFunctions();

// Q4

function displayName() {
    let name = prompt("Enter name:");
    if (name !== null && name !== "") {
        alert("Hello, " + name + "!");
    } else {
        alert("No name entered.");
    }
}

displayName();

//  Q5

function concat(variable, string, number) {}

// Q6

function concatenateAndAssign(param1, param2) {
    let concatenatedResult = param1 + param2;
    return concatenatedResult;
}

// Q7

function multiplyAndAssign(param1, param2, param3) {
    let result = param1 * param2 * param3;
    return result;
}

// Q8

function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

// Q9

function calculateSum(a, b) {
    return a + b;
}

// Q10

function calculateSum(a, b) {
    return a + b;
}

let result = calculateSum(3, 1);

// Q11

function letterCounts(word) {
    let counts = {};
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (counts[letter]) {
            counts[letter]++;
        } else {
            counts[letter] = 1;
        }
    }
    return counts;
}

// Q12

function setYear(date, year) {
    date.setFullYear(year);
    return date;
}

// Q13

function calculateAge(dateOfBirth) {
    
    let dob = new Date(dateOfBirth);
    
    let currentDate = new Date();
    
    let age = currentDate.getFullYear() - dob.getFullYear();
    return age;
}

// Q14

function checkPresence(word, array) {
    return array.includes(word);
}

let names = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
let wordToFind = 'hassan';
console.log("Presence of", wordToFind + ":", checkPresence(wordToFind, names));

// Q15

function repeatLetter(letter) {
    return letter.repeat(10);
}

// Q16

function reverseArray(arr) {
    return arr.reverse();
}
let array = ['a', 'b', 'c', 'd', 'e'];
let reversedArray = reverseArray(array);
console.log("Reversed array:", reversedArray);

// Chapter 38 (Local vs. Global Variables)

// Q1

function calculateSum(a, b) {
    let result = a + b;
    console.log("The sum is:", result);
}

// Q2

let globalVariable = 100;

function accessGlobalVariable() {
    console.log("Global variable:", globalVariable);
}
accessGlobalVariable();

// Chapter 39, 40 (Switch Statements)

// Q1

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  case "Wednesday":
    console.log("Today is Wednesday.");
    break;
  case "Thursday":
    console.log("Today is Thursday.");
    break;
  case "Friday":
    console.log("Today is Friday.");
    break;
  case "Saturday":
    console.log("Today is Saturday.");
    break;
  case "Sunday":
    console.log("Today is Sunday.");
    break;
}

// Q2

let cityName = prompt("Enter the city name:");

switch (cityName) {
  case "Karachi":
    alert("You entered Karachi.");
    break;
  case "Lahore":
    alert("You entered Lahore.");
    break;
  case "Quetta":
    alert("You entered Quetta.");
    break;
  case "Peshawar":
    alert("You entered Peshawar.");
    break;
  default:
    alert("The city name you entered is not recognized.");
}

//                                                                              THE END