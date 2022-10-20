const divide = function(x, y) {
    if(y == 0) throw new Error("divide can't be perform");
    return x / y;
}
module.exports = divide;