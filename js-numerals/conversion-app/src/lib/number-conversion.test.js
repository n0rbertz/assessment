import convertNumberToWords from './number-conversion'

test("returns something", () => {
    expect(convertNumberToWords(2, "standard")).toBeDefined();
})

test("converts 456 to four hundred and fifty-six", () => {
    expect(convertNumberToWords(456, "standard")).toBe("four hundred and fifty-six");
})

test("converts 23 to twenty-three", () => {
    expect(convertNumberToWords(23, "standard")).toBe("twenty-three");
})

test("converts 8 to eight", () => {
    expect(convertNumberToWords(8, "standard")).toBe("eight");
})

test("converts 105 to one hundred and five", () => {
    expect(convertNumberToWords(105, "standard")).toBe("one hundred and five");
})

test("converts 111 to one hundred and eleven", () => {
    expect(convertNumberToWords(111, "standard")).toBe("one hundred and eleven");
})

test("converts 110 to one hundred and ten", () => {
    expect(convertNumberToWords(110, "standard")).toBe("one hundred and ten");
})

test("converts 20540605 to twenty million five hundred and forty thousand six hundred and five", () => {
    expect(convertNumberToWords(20540605, "standard")).toBe("twenty million five hundred and forty thousand six hundred and five");
})

test("converts 110105490365890 to one hundred and ten trillion one hundred and five billion four hundred and ninety million three hundred and sixty-five thousand eight hundred and ninety", () => {
    expect(convertNumberToWords(110105490365890, "standard")).toBe("one hundred and ten trillion one hundred and five billion four hundred and ninety million three hundred and sixty-five thousand eight hundred and ninety");
})

test("converts 1405 in british to fourteen oh five", () => {
    expect(convertNumberToWords(1405, "british")).toBe("fourteen oh five");
})

test("converts 1238 in british to twelve hundred thirty-eight", () => {
    expect(convertNumberToWords(1238, "british")).toBe("twelve hundred thirty-eight");
})

test("converts 1760 in british to seventeen hundred sixty", () => {
    expect(convertNumberToWords(1760, "british")).toBe("seventeen hundred sixty");
})

test("converts 7 to seven", () => {
    expect(convertNumberToWords(7, "standard")).toBe("seven");
})

test("converts 42 to forty-two", () => {
    expect(convertNumberToWords(42, "standard")).toBe("forty-two");
})

test("converts 1999 to one thousand nine hundred and ninety-nine", () => {
    expect(convertNumberToWords(1999, "standard")).toBe("one thousand nine hundred and ninety-nine");
})

test("converts 2001 to two thousand and one", () => {
    expect(convertNumberToWords(2001, "standard")).toBe("two thousand and one");
})

test("converts 17999 to seventeen thousand nine hundred and ninety-nine", () => {
    expect(convertNumberToWords(17999, "standard")).toBe("seventeen thousand nine hundred and ninety-nine");
})

test("converts 342251 to three hundred and forty-two thousand two hundred and fifty-one", () => {
    expect(convertNumberToWords(342251, "standard")).toBe("three hundred and forty-two thousand two hundred and fifty-one");
})

test("converts 1300420 to one million three hundred thousand four hundred and twenty", () => {
    expect(convertNumberToWords(1300420, "standard")).toBe("one million three hundred thousand four hundred and twenty");
})