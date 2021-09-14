import { EAudioTypes } from "../shared/enums/EAudioTypes";
import { AudioPlayer } from "./AudioPlayer";

const audioPlayer = new AudioPlayer();
audioPlayer.play(EAudioTypes.MP3, 'the_anxious.mp3');
audioPlayer.play(EAudioTypes.MP4, 'molotov.mp4');
audioPlayer.play(EAudioTypes.VLC, 'slipknot.vlc');
audioPlayer.play(EAudioTypes.WMV, 'naruto.wmv');
