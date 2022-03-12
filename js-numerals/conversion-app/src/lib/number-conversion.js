function convertNumberToWords(number) {
    if (number == 0) {
        return "zero";
    }
    let numberStr = number.toString();
    const ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "thirteen",
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
    }
    if (numbers[1] != 0) {
        if (word != "") {
            word += " "
        }
        word += tens[numbers[1]];
    }
    if (numbers[2] != 0) {
        if (numbers[1] != 0) {
            word = word + "-" + ones[numbers[2]]
        }
        else {
            if (word != "") {
                word += " ";
            }
            word += ones[numbers[2]];
        }
    }
    return word;
}

export default convertNumberToWords;