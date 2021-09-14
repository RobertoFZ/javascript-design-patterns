import { EAudioTypes } from "../shared/enums/EAudioTypes";

export class MediaPlayer {
	play(audioType: EAudioTypes, fileName: string) {
		console.log(`Playing ${audioType} file with name ${fileName}`);
	}
}
