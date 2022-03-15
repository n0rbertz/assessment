function convertNumberToWords(number, conversionType) {
    if (number === 0) {
        return "zero";
    }
    if (conversionType === "british" && number > 1000 && number < 2000) {
        return convertNumberToBritishEnglishWord(number);
    }
    let partsUnder1000 = splitNumberToPartsUnder1000(number);    
    return createWordFromPartsUnder1000(partsUnder1000);
}

function createWordFromPartsUnder1000(partsUnder1000) {
    const largeNumbers = ["", " thousand", " million", " billion", " trillion", " quadrillion", " quintillion"];
    let word = "";
    for (let i = partsUnder1000.length - 1; i >= 0; i--) {
        if (partsUnder1000[i] !== 0) {
            word += convertNumberUnder1000(partsUnder1000[i]) + largeNumbers[i];
        }
        if (i > 0) {
            if (i === 1 && partsUnder1000[0] === 0) {
                return word;
            }
            else if (i === 1 && partsUnder1000[0] < 100) {
                word += " and ";
            }
            else {
                word += " ";
            }
        }   
    }
    return word;
}

function splitNumberToPartsUnder1000(number) {
    let numbersUnder1000 = [];
    let numberToDivide = number;
    while (numberToDivide >= 1) {
        numbersUnder1000.push(numberToDivide % 1000);
        numberToDivide /= 1000;
        numberToDivide = Math.floor(numberToDivide);
    }
    return numbersUnder1000;
}

function convertNumberToBritishEnglishWord(number) {
    const hundreds = Math.floor(number / 100);
    const tensAndOnes = number % 100;
    if (tensAndOnes === 0) {
        return convertNumberUnder20(hundreds) + " hundred";
    }
    if (tensAndOnes < 10) {
        return convertNumberUnder20(hundreds) + " oh " + convertNumberUnder20(tensAndOnes);
    }
    return convertNumberUnder20(hundreds) + " hundred and " + convertNumberUnder100(tensAndOnes)
}

function convertNumberUnder100(number) {
    if (number < 20) {
        return convertNumberUnder20(number);
    }
    if (number % 10 === 0) {
        return convertTens(number/10);
    }
    return convertTens(Math.floor(number/10)) + "-" + convertNumberUnder20(number % 10);
}

function convertNumberUnder20(number) {
    const numbersBelow20 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    return numbersBelow20[number];
}

function convertTens(number) {
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    return tens[number];
}

function convertNumberUnder1000(number) {
    if (number < 100) {
        return convertNumberUnder100(number);
    }
    if (number % 100 === 0) {
        return convertNumberUnder20(number/100) + " hundred";
    }
    return convertNumberUnder20(Math.floor(number/100))  + " hundred and " + convertNumberUnder100(number % 100);
}

export default convertNumberToWords;