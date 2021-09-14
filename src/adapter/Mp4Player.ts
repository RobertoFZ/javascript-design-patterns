import { EAudioTypes } from "../shared/enums/EAudioTypes";
import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";

export class Mp4Player extends AdvancedMediaPlayer {
	playMp4(fileName: string) {
		console.log(`Playing ${EAudioTypes.MP4} file with name ${fileName}`);
	}
	playVlc(fileName: string) {
		// Do nothing
	}
}
