/*function myfunction(){
   ; document.getElementById("demo").innerHTML = "The paragraph has changed";
}
document.write("jessica");
// window.alert("frontend")

console.log(900);
var x = 5; 
var y = 6; 
var y = 10; 
var z = x + y;
console.log(z);


var person = 'Jessica'; //string data type
var age = 28;
var isMarried = true;
var numChildren = null;
var definition = undefined;
//console log
console.log(person);
console.log(age);
console.log(isMarried);
console.log(definition);

//.innerHTML
document.getElementById('person').innerHTML = person;
document.getElementById('number').innerHTML = age;
document.getElementById('boolen').innerHTML = isMarried;
document.getElementById('null').innerHTML = numChildren;
document.getElementById('undefined').innerHTML = definition;

//addition operators
var number1 = 10;
var number2 = 20;
console.log(sum);
var sum = number1 + number2;

//multiplication operators
var a = 5;
var b = 6;
var multiple = a * b;
console.log(multiple);

//substraction operators
var h = 20;
var i = 10;
var subt = h - i;
console.log(subt);

//division operators
var n = 65;
var m = 5;
var division = n / m;
console.log(division);

//increment operators
var s = 10;
s++;
console.log('increment operator', s);

//decrement operators
var t = 8;
t--;
console.log('this is my decrement', t);

function add(num1, numb2){
    let add = num1 + numb2
    let body = document.getElementsByTagName('body')
    return body;
    console.log(add)
}
add(56, 4)
const arr = [{
    firstname: 'Ndudi', lastname: 'Anthony', age: 30,
    firstname: 'Ohen', lastname: 'Bene',  age: 20,
}
]
console.log(arr)
function fullname(){
    document.getElementById('name1').innerHTML=arr(0).firstname+' ' +arr[0].lastname;
    document.getElementById('name2').innerHTML=arr(1).firstname+' ' +arr[1].lastname;
    document.getElementById(age).innerHTML=arr(0).age+arr(1).age;
};

console.log (arr[0].firstname+ ' ' +arr[1].lastname);
console.log (arr[1].firstname+ ' ' +arr[1].lastname);
console.log (arr[0].age +arr[1].age);






function gradescore(){
    let score= document.getElementById('score').Value;
    if (score >=50){
        document.getElementById('pass').innerHTML = 'you passed';
    }
    else{
        document.getElementById('fail').innerHTML = 'you failed';
    }*/
let users = [
    {
        name : 'jessics', age : 24
    },
    { 
        name : 'anthony', age : 30
    }
];
for (let i = 0; i < users.length; i++) { 
    console.log(users[i].age);
    console.log(users[i].name);
}
users.forEach (function (val){
    console.log('forEach',val.age);
});
users.map(function(val, i, arr){
    console.log(i);
});