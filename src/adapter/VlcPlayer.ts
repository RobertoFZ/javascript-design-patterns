import { EAudioTypes } from "../shared/enums/EAudioTypes";
import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";

export class VlcPlayer extends AdvancedMediaPlayer {
	playMp4(fileName: string) {
		// Do nothing
	}
	playVlc(fileName: string) {
		console.log(`Playing ${EAudioTypes.VLC} file with name ${fileName}`);
	}
}
