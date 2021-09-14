import { Strategy } from "./Strategy";

export class NumbersStrategyManager {
	private _strategy: Strategy;

	constructor() {
		this._strategy = new Strategy();
	}

	set strategy(strategy: Strategy) {
		this._strategy = strategy;
	}

	get strategy(): Strategy {
		return this._strategy;
	}

	doAction(firstNumber: number, secondNumber: number) {
		this._strategy.doAction(firstNumber, secondNumber);
	}
}
