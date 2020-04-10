// Mikhail Kiyatkin

//#1

function createStudent(sName, sAge, sRating) {
    let Student = {
        name: sName,
        
        age: sAge,
        
        rating: sRating,
        
        birthYear(){
            let today = new Date();
            let bY = today.getFullYear() - this.age - 1;
            if (confirm("Студент " + this.name + " уже праздновал свой День рождения в этом году?")) {
            bY = bY + 1;
        }
            return bY;
        },
        
        leapYear(){
            let leapY = 0;
            let bY = Student.birthYear();
            if (bY % 4 == 0){
            leapY = leapY + 1;
            }
            return leapY;
        },
        
        predictedPoints(){
            let cP = this.rating;
            let mCP = maxPoints;
            let mP = 100;
            let leapY = Student.leapYear();
            let pP = (cP / mCP) * mP - 3 * leapY;
            return pP;
        },
        
        finalScore(){
            let fS = 2;
            let pP = Student.predictedPoints();
            if (pP >= 85){
            fS = 5;
            }
            else if (pP >= 60 && pP < 85){
            fS = 4;
            }
            else if (pP >= 40 && pP < 60){
            fS = 3;
            }
            return fS;
        }
    };

    return Student;
}


//#2

let maxPoints = prompt("Пожалуйста, введите текущее максимально возможное количество баллов");
let students = [];

for (let i = 0; ; i++){
    let sName = prompt("Имя студента");
    let sAge = prompt("Возраст студента");
    let sRating = prompt("Рейтинг студента");
    students.push(createStudent(sName, sAge, sRating));
    let con = confirm("Добавить еще одного студента?");  
    if (con == false){
        break;
    }
}


//#3

function averageRating(students) {
    let rSum = 0;
    for (let Student of students) {
      rSum = rSum + parseFloat(Student.rating);
    }
    let meanR = rSum/students.length;
    console.log('Average rating is: ' + meanR.toFixed(2));
  }

console.log(averageRating(students));


//#4
for (let i = 0; i < students.length; i++) {
    console.log(`Student # ${i + 1}`);
    console.log("name: " + students[i].name);
    console.log("age: " + students[i].age);
    console.log("rating: " + students[i].rating);
    console.log("final score: " + students[i].finalScore());
}

//#4 короче, но выводит только переменные - функции не хочет
//for (let i = 0; i < students.length; i++) {
//    console.log(`Student # ${i + 1}`);
//    for (prop in students[i]) {
//        console.log(prop + ': ' + students[i][prop]);
//    }
//}
