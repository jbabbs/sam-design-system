import { Component, Input, AfterViewInit, ViewEncapsulation, OnInit } from '@angular/core';
import { InitPxVideo } from './js/px-video';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdsVideoPlayerComponent implements AfterViewInit {
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
