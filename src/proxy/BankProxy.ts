import { Bank } from "../shared/entities/Bank";

class BankProxy {
	private bank: Bank;

	constructor() {
		this.bank = new Bank();
	}

	deposit(amount: number) {
		this.bank.deposit(amount);
		console.log(`deposit ${amount}... total cash: ${this.bank.total()}`);
	}

	withdraw(amount: number) {
		if (this.bank.withdraw(amount)) {
			console.log(`withdraw ${amount}... total cash: ${this.bank.total()}`);
		} else {
			console.log(`failed to withdraw!`);
		}
	}

	total() {
		return console.log(`total cash: ${this.bank.total()}`);
	}
}

export default new BankProxy();
