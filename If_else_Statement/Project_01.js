// Project 01:- Temperature Converter:

function convertTemperature(value, unit){
    if (unit.toLowerCase() === 'c'){
        return (value *9/5) + 32;    //Celsius to Fahrenheit conversion formula
    } else if (unit.toLowerCase() === 'f'){
        return (value - 32)* 5/9;   //Fahrenheit to Celsius conversion formula
    } else {
        return 'Invalid unit. Use "C" for Celsius or "F" for Fahrenheit.';
    }
}



//Example usage:
console.log('40 C in F = ',convertTemperature(40,'C')); //convert 40 degree Celsius to Fahrenheit 
console.log('60 F in C = ',convertTemperature(60, 'F')); // Convert 60 Fahrenheit to Celsius

/*
Code Explanation

This code defines a JavaScript function called convertTemperature that converts temperatures between Celsius and Fahrenheit. The function takes in two parameters: value (the temperature value) and unit (the unit of the temperature provided, either 'C' for Celsius or 'F' for Fahrenheit).

Here's a breakdown of how the code works:

The convertTemperature function uses an if...else if...else statement to check the unit parameter provided:

If unit is 'C' (indicating Celsius), it uses the formula (value * 9/5) + 32 to convert Celsius to Fahrenheit.
If unit is 'F' (indicating Fahrenheit), it uses the formula (value - 32) * 5/9 to convert Fahrenheit to Celsius.
If the provided unit is neither 'C' nor 'F', it returns an error message indicating that the unit is invalid and asks the user to use 'C' for Celsius or 'F' for Fahrenheit.
The function then returns the converted temperature value or an error message, depending on the provided unit.

Example usage of the convertTemperature function:

console.log('40 C in F = ', convertTemperature(40, 'C')); This line logs the conversion of 40 degrees Celsius to Fahrenheit.
console.log('60 F in C = ', convertTemperature(60, 'F')); This line logs the conversion of 60 degrees Fahrenheit to Celsius.
When you run this code, it will output the converted temperatures in the console:

40 C in F = followed by the converted temperature from Celsius to Fahrenheit.
60 F in C = followed by the converted temperature from Fahrenheit to Celsius.
For example, convertTemperature(40, 'C') would output the equivalent of 40 degrees Celsius in Fahrenheit, and convertTemperature(60, 'F') would output the equivalent of 60 degrees Fahrenheit in Celsius.  
*/