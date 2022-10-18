class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number)
        this._overdraft = overdraft; // the account number
    }
    getOverdraft()
    {
        return this._overdraft;
    }
    setOverdraft(overdraft){
        this._overdraft = overdraft;
    }
    /**
     * Method to take money out of the account
     *
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance + this._overdraft) ){
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }
    endOfMonth(){
        if(this.getBalance() < 0){
            return "Warning, low balance CheckingAccount " + this.getNumber() +": balance: "+this.getBalance()+" overdraft limit:"+ this.getOverdraft();
        }
    }
    /**
     * @returns {string} representation of this account
     */
    toString() {
        return "Checking Account " + this._number + ": balance " + this._balance;
    }
}