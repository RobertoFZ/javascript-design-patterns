import { Bank } from "../shared/entities/Bank";

export class BankSystemTemplate {
	protected bank: Bank = new Bank();

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

	transfer(amount: number, account: string) {
		throw new Error("transfer must be implemented");
	}
}
