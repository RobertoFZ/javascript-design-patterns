import { Strategy } from "./Strategy";

export class MultiplyNumbersStrategy extends Strategy {
	doAction(firstNumber: number, secondNumber: number) {
		console.log(
			`Multiply ${firstNumber} * ${secondNumber} = ${
				firstNumber * secondNumber
			}`
		);
	}
}
