import { Light } from "./Light";
import { TraficLight } from "./TrafficLight";
import { YellowLight } from "./YellowLight";

export class GreenLight extends Light {
	private light: TraficLight;

	constructor(light: TraficLight) {
		super();
		this.light = light;
	}
	go() {
		console.info("Green light for 4 seconds");
		setTimeout(
			() => this.light.change(new YellowLight(this.light)),
			this.seconds * 1000
		);
	}
}
