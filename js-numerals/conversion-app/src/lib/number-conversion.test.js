import convertNumberToWords from './number-conversion'

test("returns something", () => {
    expect(convertNumberToWords(2)).toBeDefined();
})

test("converts 456 to four hundred and fifty-six", () => {
    expect(convertNumberToWords(456)).toBe("four hundred and fifty-six");
})

test("converts 23 to twenty-three", () => {
    expect(convertNumberToWords(23)).toBe("twenty-three");
})

test("converts 8 to eight", () => {
    expect(convertNumberToWords(8)).toBe("eight");
})

test("converts 105 to one hundred and five", () => {
    expect(convertNumberToWords(105)).toBe("one hundred and five");
})


