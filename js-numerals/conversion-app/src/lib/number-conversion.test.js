import convertNumberToWords from './number-conversion'

test("returns something", () => {
    expect(convertNumberToWords(2)).toBeDefined();
})

test("converts 456 to four hundred fifty-six", () => {
    expect(convertNumberToWords(456)).toBe("four hundred fifty-six");
})

test("converts 23 to twenty-three", () => {
    expect(convertNumberToWords(23)).toBe("twenty-three");
})

test("converts 8 to eight", () => {
    expect(convertNumberToWords(8)).toBe("eight");
})