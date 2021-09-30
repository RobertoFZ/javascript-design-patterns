import { BankSystemTemplate } from "./BankSystemTemplate";

export class SantanderBank extends BankSystemTemplate {
	constructor() {
		super();
	}

	transfer(amount: number, account: string) {
		if (this.bank.total() < amount) {
			console.error("You not have enough money");
			return;
		}
		this.bank.withdraw(amount);
		console.info(`You transfer $${amount} to account ${account}`);
		console.info(`New balance: $${this.bank.total()}`);
	}
}
