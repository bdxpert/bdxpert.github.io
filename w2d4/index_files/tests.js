describe("String.prototype.filter", function () {
    it("takes string, and filter some words and retrun final string",
        function () {
            assert.equal("i am  good", "i am not good".filter(["not","is"]));
        });
});

describe("Array.prototype.bubbleSort", function () {
    it("takes array of number, and sort asending order using bubble sort algorithm",
        function () {
            assert.equal([1,2,3,5,7].toString(), [7,3,5,2,1].bubbleSort());
        });
});

var professor = new Teacher();
professor.initialize("Hioi", 25);


describe("Teacher", function () {
    it("entexd person in Teacher and add new method teach that return a string",
        function () {
            assert.equal("Hioi teaches Inheritance", professor.teach("Inheritance"));
        });
});
