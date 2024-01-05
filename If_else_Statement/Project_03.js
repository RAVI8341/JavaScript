// Project 03: BMI Calculater

function calculateBMI(weight, height) {
    const BMI = weight / (height * height);
    let bmiCalculater;
    if (BMI <18.5) {
        bmiCalculater = 'Underweight';
    }else if (BMI >=18.5 && BMI < 25){
        bmiCalculater = 'Normal Weight';
    }else if  (BMI >=25 && BMI <30){
        bmiCalculater = 'Overweight';
    }else {
        bmiCalculater = 'Obese';
    }
    return {BMI, bmiCalculater};
}

console.log(calculateBMI(70, 1.75));