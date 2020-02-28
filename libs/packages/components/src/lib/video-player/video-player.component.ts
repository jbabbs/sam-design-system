import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { InitPxVideo } from '../video-player/js/px-video';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdsVideoPlayerComponent implements AfterViewInit {

  GLOBAL_STRINGS: any;

  @Input() videoSourceWebmEl: string;
  @Input() videoSourceMp4El: string;
  @Input() videoHeightEl: string;
  @Input() videoWidthEl: string;
  @Input() videoPlayerId: string;
  @Input() videoCaptionEl: string;
  @Input() videoPosterEl: string;
  @Input() videoSeekInterval: number;
  @Input() videoDebug: boolean;
  @Input() videoPreloadEl: string;
  @Input() imageSrcEl: string;
  @Input() videoTitle: string;
  @Input() captionOnDefault: boolean;


  ngAfterViewInit() {
    this.GLOBAL_STRINGS = {

      PLAY: "Play",

      PAUSE: "Pause",

      TOGGLE_FULL_SCREEN: "Toggle full screen",

      MUTE: "Mute",

      RESTART: "Restart",

      CAPTIONS: "Closed captions",

      REWIND: "Rewind",

      FORWARD: "Forward"

    };

    InitPxVideo({
      videoId: this.videoPlayerId,
      captionsOnDefault: this.captionOnDefault,
      seekInterval: this.videoSeekInterval,
      videoTitle: this.videoTitle,
      debug: this.videoDebug
    });
  }

  constructor() {
}

}
