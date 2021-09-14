import { EAudioTypes } from "../shared/enums/EAudioTypes";
import { MediaAdapter } from "./MediaAdapter";
import { MediaPlayer } from "./MediaPlayer";

export class AudioPlayer extends MediaPlayer {
	private mediaAdapter: MediaAdapter | null = null;

	play(audioType: EAudioTypes, fileName: string) {
		if (audioType === EAudioTypes.MP3) {
			console.log(`Playing ${audioType} file with name ${fileName}`);
		} else if ([EAudioTypes.MP4, EAudioTypes.VLC].includes(audioType)) {
			this.mediaAdapter = new MediaAdapter(audioType);
			this.mediaAdapter.play(audioType, fileName);
		} else {
			console.log(`Invalid media. ${audioType} format not supported`);
		}
	}
}
