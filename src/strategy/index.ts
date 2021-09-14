import { AddNumbersStrategy } from "./AddNumbersStrategy";
import { MultiplyNumbersStrategy } from "./MultiplyNumbersStrategy";
import { NumbersStrategyManager } from "./NumbersStrategyManager";

const strategyManager = new NumbersStrategyManager();
const addNumbersStrategy = new AddNumbersStrategy();
const multiplyNumbersStrategy = new MultiplyNumbersStrategy();

strategyManager.strategy = addNumbersStrategy;
strategyManager.doAction(10, 20);
multiplyNumbersStrategy.doAction(5, 10);
