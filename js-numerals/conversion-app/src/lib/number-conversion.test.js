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

test("converts 111 to one hundred and eleven", () => {
    expect(convertNumberToWords(111)).toBe("one hundred and eleven");
})

test("converts 110 to one hundred and ten", () => {
    expect(convertNumberToWords(110)).toBe("one hundred and ten");
})

test("converts 20540605 to twenty million five hundred and forty thousand six hundred and five", () => {
    expect(convertNumberToWords(20540605)).toBe("twenty million five hundred and forty thousand six hundred and five");
})
