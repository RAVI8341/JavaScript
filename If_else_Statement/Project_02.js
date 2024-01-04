// Project 02 Grade Calculater:

function calculateGrade(score){
    if (score >=90){
        return 'A  "Excilient"'
    } else if (score >=80){
        return 'B "Very good"'
    } else if (score >=70){
        return 'C "Good"'
    } else if (score >=60){
        return 'D  "Average"'
    }else{
        return 'F "Fail"';
    }
}

console.log(calculateGrade(85))
console.log(calculateGrade(75))
console.log(calculateGrade(65))
console.log(calculateGrade(55))