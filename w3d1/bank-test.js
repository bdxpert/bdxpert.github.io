
let bank = new Bank();
let savAccount = bank.addSavingAccount(0.5);
savAccount.deposit(1000);

bank.addAccount(savAccount);
let checkAccount = bank.addCheckingAccount(100);
checkAccount.deposit(1000);
bank.addAccount(checkAccount);

describe("savAccount.addInterest", function () {
    it("this return interest for current balance",
        function () {
            assert.equal(5, savAccount.addInterest());
        });
});
describe("savAccount.setInterest", function () {
    it("this saving account negative interest setup",
        function () {
            assert.throws(function () { savAccount.setInterest(-30); }, Error, "Interest amount has to be greater than zero");
        });
});
/*
describe("savAccount.setInterest", function () {
    it("this return interest for current balance",
        function () {
            assert.equal("", savAccount.setInterest(3));
        });
});
*/
// savAccount.setInterest(0.3)
savAccount.endOfMonth();
/*
describe("checkAccount.getBalance", function () {
    it("this return checking account current balance",
        function () {
            assert.equal(1000, checkAccount.getBalance());
        });
});
*/

describe("checkAccount.getBalance", function () {
    it("this return checking account balance after withdraw",
        function () {
            checkAccount.withdraw(1050);
            assert.equal(-50, checkAccount.getBalance());
        });
});



describe("checkAccount.getBalance", function () {
    it("this return checking account balance after withdraw",
        function () {
            assert.equal(-50, checkAccount.getBalance());
        });
});