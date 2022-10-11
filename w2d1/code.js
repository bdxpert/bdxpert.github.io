/* runs test to see if expected argument is === to value returned by function2test argument */

function max(x,y){
    let data = [x,y];

    let res = data.reduce(function(prev, elm, i, array) {
        return prev > elm? prev : elm;
    }, 0);
    return res;
}
// console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));


function maxThree(x, y, z){
    let data = [x,y, z];

    let max = data.reduce(function(prev, elm, i, array) {
        return prev > elm? prev : elm;
    }, 0);

    return max;
}
// console.log("Expected output of maxThree(10,9,7) is 10  " + myFunctionTest(10, max(10,9,7)));

function isVowel(x){
    let vowel = ['A', 'E', 'I', 'O', 'U', 'a', 'e','i','o','u'];

   const isV = vowel.filter(function(elm, i, array){
       return (elm === x)
    });
   return isV.length >0;
}
// console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));



function sum(arr){
    const sum = arr.reduce(function(prev,elm, i, array){
        return prev+elm;
    }, 0);

    return sum;
}
// console.log("Expected output of sum([2,4,5]) is 11  " + myFunctionTest(11, sum([2,4,5])));

function multiply(arr){
    return arr.reduce(function (prev, elm, i, array) {
        return prev*elm;
    }, 1);
}
// console.log("Expected output of multiply([2,4,5]) is 40  " + myFunctionTest(40, multiply([2,4,5])));


function reverse(str) {
    let revStrArr = str.split("");

    return revStrArr.reverse().reduce(function(prev, elm, i, array) {
        return prev +""+elm;
    },"");
}

// console.log("Expected output of reverse('san') is nas  " + myFunctionTest('nas', reverse("san")));

function findLongestWord(wordsArry) {
    let len = wordsArry.reduce(function(prev, elem, i, array) {
        return prev.length > elem.length?prev: elem;
    },'');

    return len.length;
}
// console.log("Expected output of findLongestWord([\"w\", \"cc\", \"sss\"] is 3  " + myFunctionTest(3, findLongestWord(["w", "cc", "sss"])));

function filterLongWords(wordsArry, maxLen) {
    return wordsArry.filter(function(elem, i, array) {
        return elem.length > maxLen;
    });
}
// console.log("Expected output of filterLongWords([\"w\", \"cc\", \"sss\"], 2) is ['sss']  " + myFunctionTest(['sss'].toString(), filterLongWords(["w", "cc", "sss"], 2)));

//document.writeln(filterLongWords(["w", "cc", "sss"], 2) + "filterLongWords<br/>");

const a = [1,3,5,3,3];

const mul = a.map(function(elem, i, array) {
    return elem * 10;
});
// console.log("Expected output of [1,3,5,3,3] by 10 is [10,30,50,30,30]  " + myFunctionTest([10,30,50,30,30 ].toString(), mul.toString()));

// document.writeln(mul.toString() + "<br/>");

const element3 = a.filter(function(elem, i, array) {
    return elem == 3;
});
// console.log("Expected output of [1,3,5,3,3] equal 3 is 3,3,3  " + myFunctionTest([3,3,3].toString(), element3.toString()));
// document.writeln(element3.toString() + "<br/>");

const mulTotal = a.reduce(function(prev, elem, i, array) {
    return prev*elem;
});

function shortest(x, y, z) {
    let item = [x,y,z];
    return item.reduce(function(prev, elm, i, array){
        return (prev > elm)? elm : prev;
    });
}
// console.log("Expected output of [1,3,5,3,3] multiply total is 135  " + myFunctionTest("z", shortest("hello", "z", "bye")));
