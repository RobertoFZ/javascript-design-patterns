export class Bank {
	private cash: number = 0;

	constructor() {
		this.cash = 0;
	}

	deposit(amount: number) {
		this.cash += amount;
		return this.cash;
	}

	withdraw(amount: number) {
		if (amount <= this.cash) {
			this.cash -= amount;
			return true;
		} else {
			return false;
		}
	}

	total() {
		return this.cash;
	}
}
