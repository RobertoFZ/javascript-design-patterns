import { Light } from "./Light";
import { RedLight } from "./RedLight";

export class TraficLight {
	private count = 0;
	private currentState: Light = new RedLight(this);

	change(state: any) {
		if (this.count++ >= 10) return;

		this.currentState = state;
		this.currentState.go();
	}

	start() {
		this.currentState.go();
	}
}
