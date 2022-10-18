class Bank {

    accounts = [];
    addAccount(account) {
        this.accounts.push(account);
    }
    addSavingAccount(interest) {
        let accNumber = Math.random();
        return new SavingsAccount(accNumber, interest);
    }
    addCheckingAccount(overDraft) {
        let accNumber = Math.random();
        return new CheckingAccount(accNumber, overDraft);
    }
    closeAccount(number)
    {
        let accObj = this.accounts.filter(acc=>acc.getNumber() === number);
        const index = this.accounts.indexOf(accObj);

        if (index > -1) {
            this.accounts.splice(index, 1);
        }
    }
    accountReport() {
        let accStr = "";
        this.accounts.forEach(function(acc) {
            accStr += "Account: " + acc.getNumber() + "\r";
        });
        return accStr;
    }
    endOfMonth() {
        this.accounts.forEach(function(acc){
            console.log(acc.endOfMonth());
        });
    }
}