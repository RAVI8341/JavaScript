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