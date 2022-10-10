describe("max", function () {
    it("takes 2 number, and returns whicherver number is maximum",
        function () {
            assert.equal(7, max(5,7));
        });
});

describe("maxThree", function () {
    it("takes 3 number, and returns whicherver number is maximum",
        function () {
            assert.equal(7, maxThree(5,7,2));
        });
});

describe("isVowel", function () {
    it("takes 1 character, and returns Boolean true/false for vowel",
        function () {
            assert.equal(true, isVowel('a'));
        });
});

describe("sum", function () {
    it("takes [2,4,5] array of number, and returns total sum",
        function () {
            assert.equal(11, sum([2,4,5]));
        });
});
describe("multiply", function () {
    it("takes [2,4,5] array of number, and returns total multiply",
        function () {
            assert.equal(40, multiply([2,4,5]));
        });
});
describe("reverse", function () {
    it("takes string, and returns reverse string",
        function () {
            assert.equal('olleh', reverse('hello'));
        });
});
describe("findLongestWord", function () {
    it("takes ['hello','ss','ddd'] array of string, and returns longest word length",
        function () {
            assert.equal(5, findLongestWord(['hello','ss',"ddd"]));
        });
});

describe("filterLongWords", function () {
    it("takes ['hello','ss','ddd'] ,2  array filter to a length, and returns longest word of given length",
        function () {
            assert.equal(['hello','ddd'].toString(), filterLongWords(['hello','ss','ddd'], 2));
        });
});

describe("shortest", function () {
    it("takes 2,4,1 number, and returns shorest/minimum number",
        function () {
            assert.equal(2, shortest(2,4,5));
        });
});