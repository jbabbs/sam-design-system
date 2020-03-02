import { Component, Input, AfterViewInit, ViewEncapsulation, OnInit } from '@angular/core';
import { InitPxVideo } from './js/px-video';

@Component({
  selector: 'sds-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./css/px-video.css'],
  encapsulation: ViewEncapsulation.None
})
export class SdsVideoPlayerComponent implements AfterViewInit, OnInit {
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


  ngOnInit(){}

  ngAfterViewInit() {
    InitPxVideo({
      videoId: this.videoPlayerId,
      captionsOnDefault: true,
      seekInterval: this.videoSeekInterval,
      videoTitle: 'Video Player',
      debug: this.videoDebug
    });

  }

  constructor() {
}

}
