const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
function getNumber (fromNumber) {
     readline.question('Enter a number:', num => {
        if(num == 'stop') {
             console.log( "Sum:" + fromNumber);
            readline.close();
        } else {
            let val = parseInt(num) + parseInt(fromNumber);
            getNumber(val);
        }
    });
}
getNumber(0);
