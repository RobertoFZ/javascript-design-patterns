import { EAudioTypes } from "../shared/enums/EAudioTypes";
import { AdvancedMediaPlayer } from "./AdvancedMediaPlayer";
import { MediaPlayer } from "./MediaPlayer";
import { Mp4Player } from "./Mp4Player";
import { VlcPlayer } from "./VlcPlayer";

export class MediaAdapter extends MediaPlayer {
	private advancedMediaPlayer: null | AdvancedMediaPlayer = null;

	constructor(audioType: EAudioTypes) {
		super();
		if (audioType === EAudioTypes.MP4) {
			this.advancedMediaPlayer = new Mp4Player();
		}
		if (audioType === EAudioTypes.VLC) {
			this.advancedMediaPlayer = new VlcPlayer();
		}
	}

	play(audioType: EAudioTypes, fileName: string) {
		if (audioType === EAudioTypes.MP4) {
			this.advancedMediaPlayer?.playMp4(fileName);
		} else if (audioType === EAudioTypes.VLC) {
			this.advancedMediaPlayer?.playVlc(fileName);
		}
	}
}
