function convertNumberToWords(number) {
    if (number == 0) {
        return "zero";
    }
    let word = "";
    let numbersInHundreds = [];
    let numberToDivide = number;
    while (numberToDivide >= 1) {
        numbersInHundreds.push(numberToDivide % 1000);
        numberToDivide /= 1000;
        numberToDivide = Math.floor(numberToDivide);
    }
    const largeNumbers = ["", " thousand", " million", " billion", " trillion"];
    for (let i = numbersInHundreds.length - 1; i >= 0; i--) {
        word += convertNumbersBelow1000ToWords(numbersInHundreds[i]) + largeNumbers[i];
        if (i > 0) {
            if (i == 1 && numbersInHundreds[0] < 100) {
                word += " and ";
            }
            else {
                word += " ";
            }
        }   
    }
    return word;
}

function convertNumbersBelow1000ToWords(number) {
    let numberStr = number.toString();
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
                  "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let numbers = [0, 0, 0];
    let difference = 3 - numberStr.length;
    for (let i = 0; i < numberStr.length; i++) {        
        numbers[i + difference] = numberStr[i]; 
    }
    let word = "";
    if (numbers[0] != 0) {        
        word = word + ones[numbers[0]] + " hundred";
        if (numbers[1] == 0 && numbers[2] == 0) {
            return word;
        }
        word += " and "
    }
    if (numbers[1] != 0) {
        if (numbers[1] == 1) {
            word += ones[number - numbers[0] * 100];
            return word;
        }
        word += tens[numbers[1]];
    }
    if (numbers[2] != 0) {
        if (numbers[1] != 0) {
            word = word + "-" + ones[numbers[2]]
        }
        else {
            word += ones[numbers[2]];
        }
    }
    return word;
}

export default convertNumberToWords;