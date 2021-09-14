import { Strategy } from "./Strategy";

export class AddNumbersStrategy extends Strategy {
	doAction(firstNumber: number, secondNumber: number) {
		console.log(
			`Add ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`
		);
	}
}
