//Kiyatkin Mikhail
//#1
let name = prompt("Your name: ");
let age = prompt("Your age: ");

console.log("Your name is " + name + " and your age is " + age);


//#2
let name = prompt("Your name: ");
let age = prompt("Your age: ");

if (age >= 18 && name == "Ярополк") {
    console.log("Привет, Ярополк");
}


//#3
let whitelist = ["Zeus", "Hera", "Poseideon", "Ares", "Apollo", "Hermes"];

let name = prompt("Your name: ");

if (whitelist.includes(name)) {
    console.log("Kratos");
}
else {
    console.log("hehe");
}


//#4
let whitelist = ["Zeus", "Hera", "Poseideon", "Ares", "Apollo", "Hermes"];
let blacklist = [];

let name = prompt("Your name: ");
let age = prompt("Your age: ");

if (whitelist.includes(name)) {
    console.log("Kratos");
  
  if (age < 18) {
    blacklist.push(name);
    }
}
else {
    console.log("hehe");

    if (age < 18) {
    blacklist.push(name);
    }
}
//console.log(blacklist);


//#5
let names = [];

for (let i = 0; i < 3; i++){
    let name = prompt("Your name: ");
    let age = prompt("Your age: ");

    if (age % 2 == 1) {
        names.push(name);
    }
}
console.log(names);


//#6
for (let i = 0; i < 5; i++) {
  console.log("#".repeat(i + 1));
}
for (let j = 4; j > 0; j--){
  console.log("#".repeat(j));  
}


//#7
let nums = [12, 43, 11, 27, 18];
for (let i = 0; i < nums.length; i++){
    console.log("#".repeat(nums[i]));
}


//#8
let ages = [];
for (let i = 0; i < 3; i++){
    let age = prompt("Your age: ");
    ages.push(age);
}

function mean(){
    let summ = 0;
    for (j = 0; j < ages.length; j++){
        summ = summ + parseInt(ages[j]);
    }
    let m = summ/ages.length;
    return m;
}
  
console.log(mean());


//#9
let nums = [34, 1, 41, 22, 98];
function squares(){
    let summ = 0;
    for (let i = 0; i < nums.length; i++){
        summ = summ + parseInt(nums[i]) ** 2;
    }
    return summ
}

console.log(squares())


//#10