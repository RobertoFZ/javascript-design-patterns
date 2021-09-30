import { GreenLight } from "./GreenLight";
import { Light } from "./Light";
import { TraficLight } from "./TrafficLight";

export class RedLight extends Light {
	private light: TraficLight;

	constructor(light: TraficLight) {
		super();
		this.light = light;
	}
	go() {
		console.info("Red light for 4 seconds");
		setTimeout(
			() => this.light.change(new GreenLight(this.light)),
			this.seconds * 1000
		);
	}
}
