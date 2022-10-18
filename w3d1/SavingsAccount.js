class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number)
        this._interest = interest; // the account number
    }
    getInterest()
    {
        return this._interest;
    }
    setInterest(interest)
    {
        if (interest <= 0) {
            throw new RangeError("Interest amount has to be greater than zero");
        }
        this._interest = interest;
    }
    addInterest()
    {
        if (this.getBalance() <= 0) {
            throw new RangeError("Balance amount has to be greater than zero");
        }

        return (this._interest * this.getBalance())/100;
    }
    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Saving Account " + this._number + " Interest:" + this._interest  +"balance: " + this._balance;
    }
    endOfMonth(){
        return "Interest added SavingsAccount " + this.getNumber() + ": balance: "+ (this.getBalance()+this.addInterest()) +" interest: "+this.addInterest();
    }
}