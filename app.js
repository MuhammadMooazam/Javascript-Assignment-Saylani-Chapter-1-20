// Chapter # 1:-
// Assignment # 1:-

// Q1)
alert("Assalam-o-alikum!")

// Q2)
alert("Error! Please enter a valid password.")

// Q3)
alert("Welcome to JS Land...\nHappy Coding!")

// Q4)
alert("Welcome to JS Land...")
alert("Happy Coding!")

// Q5)
console.log("Hello...I can run JS through my web browser's console")





// Chapter # 2:-
// Assignment # 2:-

// Q1)
var username

// Q2)
var myName = ("Syed Muhammad Mooazam")

// Q3)
var message = ("Hello World")
alert(message)

// Q4)
var name = ("Jhone Doe")
var age = ("15 years old")
var certification = ("Certified Mobile Application Development")
alert(name)
alert(age)
alert(certification)

// Q5)
var a = ("PIZZA")
alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// Q6)
var email = ("example@example.com")
alert("My email address is " + email)

// Q7)
var book = ("A smarter way to learn JavaScript")
alert("I am trying to learn from the Book " + book)

// Q8)
document.write("Yah! I can write HTML content through JavaScript", "<br>")

// Q9)
var pattern = ("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬")
alert(pattern)
document.write(pattern)





// Chapter # 3:-
// Assignment # 3:-

// Q1)
var age = (19)
alert("I am " + age + " years old")

// Q2)
var track = (14)
alert("You have visited this site " + track + " times.")

// Q3)
var birthYear = (2001)
document.write("<br><br>" + "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number")

// Q4)
var name = ("John Doe").bold()
var product = ("T-Shirts(s)").bold()
var quantity = ("5").bold()
document.write("<br>" + name + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "<br><br>")





// Chapter # 4:-
// Assignment # 4:-

// Q1)
var a, b, c;

// Q2)
var a, b, c, d, e;      //Legal
// var 1a,? b, !c, "d,-e;  //Illegal

// Q3)
var heading = ("Rules for naming JS variables" + "<br>").bold()
document.write(heading)
document.write("<br>" + "Variable names can only contain, numbers, $ and _. For example $my_1stVariable")
document.write("<br>" + "Variables must begin with a letter, $, or _. For example $name, _name or name")
document.write("<br>" + "Variable names are case sensitive")
document.write("<br>" + "Variable names should not be JS keywords" + "<br><br>")





// Chapter # 5:-
// Assignment # 5:-

// Q1)
var num1 = 3
var num2 = 5
document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))

// Q2)
var num1 = 3
var num2 = 5
document.write("<br>" + "Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
document.write("<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
document.write("<br>" + "Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
document.write("<br>" + "Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2))

// Q3)
var number
document.write("<br>" + "<br>" + "Value after variable declaration is " + number)
number = 5
document.write("<br>" + "Initial value: " + number)
document.write("<br>" + "Value after increment is: " + ++number)
var number1 = number + 7
document.write("<br>" + "Value after addition is: " + number1)
document.write("<br>" + "Value after decrement is: " + --number1)
document.write("<br>" + "The remainder is: " + number1 % 3)

// Q4)
var cost = 600
var ticket = 5
document.write("<br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + "PKR")

// Q5)
var i
document.write("<br>" + "<br>" + "Table of 4" + "<br>")
for (i = 1; i <= 10; i++) {
    document.write("4x" + i + "=" + 4 * i + "<br>")
}

// Q6)
var celsius = 25
document.write("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F")
var fahrenheit = 70
document.write("<br>" + fahrenheit + "°F is " + (fahrenheit - 32) * 5 / 9 + "°C")

// Q7)
document.write("<br>" + "<br>" + "Shopping Cart" + "<br>")
var pi1 = 650, pi2 = 100, oi1 = 3, oi2 = 7, sc = 100
document.write("<br>" + "Price of item 1 is " + pi1)
document.write("<br>" + "Ordered quantity of item 1 is " + oi1)
document.write("<br>" + "Price of item 2 is " + pi2)
document.write("<br>" + "Ordered quantity of item 2 is " + oi2)
document.write("<br>" + "Shiping charges " + sc)
document.write("<br>" + "<br>" + "Total cost of your order is " + ((pi1 * oi1) + (pi2 * oi2) + sc))

// Q8)
document.write("<br>" + "<br>" + "Marks Sheet" + "<br>")
var marksobtained = 804
var totalmarks = 980
document.write("<br>" + "Total marks " + totalmarks)
document.write("<br>" + "Marks obtained " + marksobtained)
document.write("<br>" + "Percentage: " + (marksobtained / totalmarks * 100) + "%")

// Q9)
document.write("<br>" + "<br>" + "Currency in PKR" + "<br>")
var dollar = 10, saudiriyal = 25
document.write("<br>" + "Total currency in PKR:" + ((dollar * 104.80) + (saudiriyal * 28)))

// Q10)
var integer = 9
document.write("<br>" + "<br>" + (((integer + 5) * 10) / 2))

// Q11)
document.write("<br>" + "<br>" + "Age Calculator" + "<br>")
var currentyear = 2020, birthyear = 2001
document.write("<br>" + "Current year: " + currentyear)
document.write("<br>" + "Birth year: " + birthyear)
document.write("<br>" + "Your age is: " + (currentyear - birthYear))

// Q12)
document.write("<br>" + "<br>" + "The Geometrizer" + "<br>")
var radius = 20
document.write("<br>" + "Radius of cicle is:" + radius)
document.write("<br>" + "The circumference is:" + (2 * 3.1415926535897932 * radius))
document.write("<br>" + "The area is:" + (3.1415926535897932 * radius * radius))

// Q13)
document.write("<br>" + "<br>" + "The Lifetime Supply Calculator" + "<br>")
var snack = ("chocolate chip")
var age = 19, maxage = 80, perday = 3
document.write("<br>" + "Favourite Snack: " + snack)
document.write("<br>" + "Current age: " + age)
document.write("<br>" + "Estimated Maximum Age: " + maxage)
document.write("<br>" + "Amount of snack per day: " + perday)
document.write("<br>" + "You will need " + ((maxage - age) * perday) + " " + snack + " to last you until the ripe old age of " + maxage)





// Chapter # 6-9:-
// Assignment # 6:-

// Q1)
var a = 10
document.write("<br>" + "<br>" + "Result:" + "<br>")
document.write("<br>" + "The value of a is: " + a)
document.write("<br>" + "<br>" + "------------------------------" + "<br>")
document.write("<br>" + "The value of ++a is: " + (++a))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of a++ is: " + (a++))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of --a is: " + (--a))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of a-- is: " + (a--))
document.write("<br>" + "Now the value of a is: " + a)

// Q2)
var a = 2, b = 1
var result = --a - --b + ++b + b--
//       3 =  1  -  0  +  1  + 1 
document.write("<br>" + "<br>" + "a is: " + a)
document.write("<br>" + "b is: " + b)
document.write("<br>" + "result is: " + result)

// Q3)
var name1 = prompt("What is your name?")
document.write("<br>" + "<br>" + "Assalam-o-alikum " + name1 + "!" + "<br>")

// Q5)
var tabnum = +prompt("Enter a number: ")
if (tabnum) {
    document.write("<br>" + "Table of " + tabnum + " is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + tabnum + "x" + i + "=" + (tabnum * i));
    }
}
else {
    document.write("<br>" + "Table of 5 is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + "5x" + i + "=" + (5 * i));
    }
}
document.write("<br><br>")





// Chapter # 9-11:-
// Assignment # 9-10:-

// Q1)
var city = prompt("What is your city name?")
if (city === "Karachi" || city === "karachi") {
    document.write("Welcome to city of lights" + "<br>")
}
else {
    document.write("")
}

// Q2)
var gender1 = prompt("What is your gender?")
if (gender1 === "Male" || gender1 === "male") {
    document.write("Good Morning Sir" + "<br>")
}
else if (gender1 === "Female" || gender1 === "female") {
    document.write("Good Morning Ma’am" + "<br>")
}

// Q3)
var signalcolor = prompt("Tell the color of traffic signal on road?")
if (signalcolor === "Red" || signalcolor === "red") {
    document.write("Must Stop" + "<br>")
}
else if (signalcolor === "Yellow" || signalcolor === "yellow") {
    document.write("Ready to move" + "<br>")
}
else if (signalcolor === "Green" || signalcolor === "green") {
    document.write("Move now" + "<br>")
}

// Q4)
var fuel = prompt("Remaining fuel in your car in litres")
if (fuel < 0.25) {
    document.write("Please refill the fuel in your car" + "<br>")
}

// Q5)

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");        //It is valid
}

// b 
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");        //It is unvalid
}

// c 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");        //It is valid
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");        //It is valid
}

// d 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");        //It is valid
}

// e
if (true) {
    alert("True");        //It is valid
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");        //It is valid
}

// Q6)
var som1 = +prompt("Marks obtained in Subject 1: ")
var stm1 = +prompt("Total marks in Subject 1: ")
var som2 = +prompt("Marks obtained in Subject 2: ")
var stm2 = +prompt("Total marks in Subject 2: ")
var som3 = +prompt("Marks obtained in Subject 3: ")
var stm3 = +prompt("Total marks in Subject 3: ")
var percentage1 = (som1 + som2 + som3) / (stm1 + stm2 + stm3) * 100
document.write("Marks Sheet" + "<br><br>")
document.write("Total marks : " + (stm1 + stm2 + stm3) + "<br>")
document.write("Marks obtained : " + (som1 + som2 + som3) + "<br>")
document.write("Percentage : " + percentage1 + "%" + "<br>")
if (percentage1 < '100' && percentage1 >= '80') {
    document.write("Grade : A-one" + "<br>")
    document.write("Remarks : Excellent" + "<br>")
}
else if (percentage1 < '80' && percentage1 >= '70') {
    document.write("Grade : A" + "<br>")
    document.write("Remarks : Good" + "<br>")
}
else if (percentage1 < '70' && percentage1 >= '60') {
    document.write("Grade : B" + "<br>")
    document.write("Remarks : You need to improve" + "<br>")
}
else if (percentage1 < '60' && percentage1 >= '0') {
    document.write("Grade : Fail" + "<br>")
    document.write("Remarks : Sorry" + "<br>")
}

// Q7)
var secretNumber = 5
var guessSecretNumber = +prompt("Guess the Secret Key")
var guessSecretNumberAddOne = (guessSecretNumber - 1)
if (secretNumber === guessSecretNumber) {
    document.write("Bingo! Correct answer" + "<br>")
}
else if (secretNumber === guessSecretNumberAddOne) {
    document.write("Close enough to the correct answer" + "<br>")
}

// Q8)
var number2 = +prompt("Enter any number: ")
if (number2 % 3 === 0) {
    document.write(number2 + " is divisible by 3" + "<br>")
}
else {
    document.write(number2 + " is not divisible by 3" + "<br>")
}

// Q9)
var number3 = +prompt("Enter any number to check if it is even or odd: ")
if (number3 % 2 === 0) {
    document.write(number3 + " is an even number" + "<br>")
}
else {
    document.write(number3 + " is an odd number" + "<br>")
}

// Q10)
var temp = prompt("Tell us the temperature")
if (temp > 40) {
    document.write("It is too hot outside" + "<br>")
}
else if (temp > 30) {
    document.write("The Weather today is Normal" + "<br>")
}
else if (temp > 20) {
    document.write("Today’s Weather is cool" + "<br>")
}
else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool" + "<br>")
}

// Q11)
var numcal1 = +prompt("Enter first number: ")
var numcal2 = +prompt("Enter second number: ")
var operator = prompt("Enter an operator: ")
if (operator === "+") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 + numcal2 + "<br>")
}
if (operator === "-") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 - numcal2 + "<br>")
}
if (operator === "*") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 * numcal2 + "<br>")
}
if (operator === "/") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 / numcal2 + "<br>")
}
if (operator === "%") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 % numcal2 + "<br>")
}





// Chapter # 12-13:-
// Assignment # 12-13:-

// Q1)
var ch = prompt('Enter any character or number:');
var a = ch.charCodeAt(0);
if ((a >= 48) && (a <= 57)) {
    alert('Input is a number.')
}
else if ((a >= 65) && (a <= 90)) {
    alert('Input is an uppercase letter.')
}
else if ((a >= 97) && (a <= 122)) {
    alert('Input is lowercase letter.')
}
else {
    alert('Invalid input');
}

// Q2)
var int1 = +prompt("Enter first integer to be compared")
var int2 = +prompt("Enter second integer to be compared")
if (int1 > int2) {
    document.write(int1 + " is larger than " + int2 + "<br>")
}
else if (int1 < int2) {
    document.write(int2 + " is larger than " + int1 + "<br>")
}
else if (int1 == int2) {
    document.write(int1 + " is equal to " + int2 + "<br>")
}

// Q3)
var integer1 = +prompt("Enter an integer")
if (integer1 > 0) {
    document.write(int1 + " is larger than zero" + "<br>")
}
else if (integer1 < 0) {
    document.write(int2 + " is smaller than zero" + "<br>")
}
else if (integer1 == 0) {
    document.write(int1 + " is equal to zero" + "<br>")
}

// Q4)
var char = prompt("Enter any character")
if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
    document.write("It is a vowel" + "<br>")
}
else {
    document.write("It is not a vowel" + "<br>")
}

// Q5)
var corpass = pakistan
var guesspass = prompt("Enter your password" + "<br>")
if (corpass === guesspass) {
    document.write("Correct! The password you entered matches the original password" + "<br>")
}
else if (corpass !== guesspass) {
    document.write("Incorrect password" + "<br>")
}
else {
    document.write("Please enter your password" + "<br>")
}

// Q6)
var greeting, hour = 13
if (hour < 18) {
    greeting = "Good day"
}
else {
    greeting = "Good evening"
}

// Q7)
var time = prompt("Enter time in 2 hour format: ")
if (time >= 0000 && time < 1200) {
    document.write("Good Morning!" + "<br>")
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon!" + "<br>")
}
else if (time >= 1700 && time < 2100) {
    document.write("Good Evening!" + "<br>")
}
else if (time >= 2100 && time < 2359) {
    document.write("Good Night!" + "<br>")
}





// Chapter # 14-16:-
// Assignment # 13-15:-

// Q1)
var students = []

// Q2)
var student = new Array()

// Q3)
var student = new Array("std1", "std2", "std3", "std4", "std5")

// Q4)
var numArray = [1, 2, 5, 6, 7, 8, 6, 7]

// Q5)
var boolArray = [true, false]

// Q6)
var mixedArray = [1, 'string1', true, 8, false, 'string 2']

// Q7)
var qual = ('Qualification:' + '<br>').bold()
document.write(qual + "<br>")
var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
var i;
for (i = 0; i < qualification.length; i++) {
    document.write((i + 1) + ') ' + qualification[i] + "<br>")
}

// Q8)
var names = ["Michael", "John", "Tony"]
var obtainedscores = [320, 230, 480]
var totalmarks1 = 500
var percentagearray
for (i = 0; i < 3; i++) {
    document.write("Score of " + names[i] + " is " + obtainedscores[i] + ". Percentage: " + (obtainedscores[i] / totalmarks1 * 100) + "%" + "<br>")
}

// Q9)
var color = ['Red', 'Green', 'Blue']
document.write(color + '<br>')
var a = prompt('What color do you want to add to the beginning?')
color.unshift(a);
document.write(color + '<br>')
var b = prompt('What color do you want to add to the end?')
color.push(b)
document.write(color + '<br>')
color.unshift('Pink', 'Orange');
document.write(color + '<br>')
color.shift(0);
document.write(color + '<br>')
color.pop()
document.write(color + '<br>')
var d = prompt('What color do you want to add?')
var e = prompt('Give the position of color: ')
var f = parseInt(e)
color.splice(f, 0, d)
document.write(color + '<br>')
var g = prompt('What color do you want to delete?')
var h = prompt('Give the position of color: ')
var i = parseInt(e)
color.slice(i, 0, g)
document.write(color + '<br>')

// Q10)
var std_score = [320, 230, 480, 120]
document.write('Scores of Students: ' + std_score + '<br>')
var sort_score = std_score.sort()
document.write('Ordered Scores of Students: ' + sort_score)

// Q11)
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
document.write('Cities List: ' + '<br>' + cities + '<br>')
var sel_cities = cities.slice(1, 4)
document.write('Selected Cities: ' + '<br>' + sel_cities + '<br>')

// Q12)
var arr = ['This ', ' is ', ' my ', 'cat'];
document.write('Array: ' + '<br>' + arr + '<br>');
var join = arr.join(' ');
document.write('String: ' + '<br>' + join + '<br>');

// Q13)
var a = [];
var i;
for (i = 0; i < 4; i++) {
    a.push(prompt("Enter Devices:"));
}
for (i = 0; i < 4; i++) {
    document.write('Out: ' + '<br>' + a[i] + '<br>');
}

// Q14)
var a = [];
var i;
for (i = 0; i < 4; i++) {
    a.push(prompt("Enter Devices:"));
}
for (i = a.length - 1; i >= 0; i--) {
    document.write('Out: ' + '<br>' + a[i] + '<br>');
}

// Q15)






// Chapter # 17-20:-
// Assignment # 17-20:-

// Q1)
var temp = [];

// Q2
var temp = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
var i;
var j;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        document.write(temp[i][j]);
    }
    document.write('<br');
}

// Q3)
var i;
for (i = 1; i <= 10; i++) {
    document.write(i + '<br>')
}

// Q4)
var num = prompt('Enter a number to show its multiplication table: ');
var len = prompt('Enter length of multiplication table: ');
document.write('Multiplication table of ' + num + '<br>');
document.write('Lenth ' + len + '<br>' + '<br>');
var i;
for (i = 1; i <= len; i++) {
    document.write(num + 'X' + i + '=' + num * i + '<br>');
}

// Q5)
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
var i;
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>')
}
for (i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>')
}

// Q6)
var i;
document.write('Counting: ' + '<br>' + '<br>');
for (i = 1; i <= 15; i++) {
    document.write(i + ', ');
}

document.write('Reverse Counting: ' + '<br>' + '<br>');
for (i = 10; i >= 1; i--) {
    document.write(i + ', ');
}

document.write('Even: ' + '<br>' + '<br>');
for (i = 0; i <= 20; i + 2) {
    document.write(i + ', ');
}

document.write('Odd: ' + '<br>' + '<br>');
for (i = 1; i < 20; i + 2) {
    document.write(i + ', ');
}

document.write('Series:' + '<br>' + '<br>');
for (i = 2; i <= 20; i + 2) {
    document.write(i + 'k, ');
}

// Q7)
var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var b = prompt('Welcome to ABC Bakery. What do you want to order Sir/Ma' + "'" + 'am');
var i;
for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
        document.write(b + 'availabe at index ' + i + ' of our bakery.');
        break;
    }
    else {
        document.write('We are Sorry. ' + b + ' is not available at our bakery.')
    }
}

// Q8)
var a = [24, 53, 78, 91, 12];
var i, j;
var f;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[i] < a[j]) {
            f = a[j];
        }
    }
}
document.write('The Largest number is ' + f);

// Q9)
var a = [24, 53, 78, 91, 12];
var i, j;
var f;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[i] > a[j]) {
            f = a[j];
        }
    }
}
document.write('The Smallest number is ' + f);

// Q10)
var i;
for (i = 1; i <= 20; i++) {
    document.write(5 * i + ', ');
}