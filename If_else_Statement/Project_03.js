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

/*

This code defines a JavaScript function called calculateBMI that takes in two parameters: weight and height. The function calculates the Body Mass Index (BMI) based on the provided weight and height, and then determines the BMI category (Underweight, Normal Weight, Overweight, or Obese) according to standard BMI ranges.

Here's a step-by-step explanation of the code:

function calculateBMI(weight, height) { ... }: Defines a function named calculateBMI that takes weight (in kilograms) and height (in meters) as parameters.

const BMI = weight / (height * height);: Calculates the BMI using the formula: weight divided by the square of height (weight in kilograms divided by height in meters squared).

let bmiCalculater;: Declares a variable bmiCalculater to store the BMI category.

The code checks the calculated BMI against specific ranges:

if (BMI < 18.5) { ... }: If BMI is less than 18.5, sets bmiCalculater to 'Underweight'.
else if (BMI >= 18.5 && BMI < 25) { ... }: If BMI is between 18.5 (inclusive) and 25 (exclusive), sets bmiCalculater to 'Normal Weight'.
else if (BMI >= 25 && BMI < 30) { ... }: If BMI is between 25 (inclusive) and 30 (exclusive), sets bmiCalculater to 'Overweight'.
else { ... }: If BMI is 30 or greater, sets bmiCalculater to 'Obese'.
return { BMI, bmiCalculater };: Returns an object containing two properties: BMI (the calculated BMI value) and bmiCalculater (the category determined based on BMI).

console.log(calculateBMI(70, 1.75));: Calls the calculateBMI function with weight 70 kg and height 1.75 meters, and logs the result to the console. This will output an object with the BMI value and the corresponding BMI category based on the input values.

For instance, if you run console.log(calculateBMI(70, 1.75));, it will calculate the BMI and return something like { BMI: 22.86, bmiCalculater: 'Normal Weight' }, indicating that the BMI is approximately 22.86, falling within the 'Normal Weight' category.

*/