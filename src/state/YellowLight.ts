import { Light } from "./Light";
import { RedLight } from "./RedLight";
import { TraficLight } from "./TrafficLight";

export class YellowLight extends Light {
	private light: TraficLight;

	constructor(light: TraficLight) {
		super();
		this.light = light;
	}
	go() {
		console.info("Yellow light for 4 seconds");
		setTimeout(
			() => this.light.change(new RedLight(this.light)),
			this.seconds * 1000
		);
	}
}
