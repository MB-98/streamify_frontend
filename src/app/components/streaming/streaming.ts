import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import videojs from 'video.js';
import Player from "video.js/dist/types/player";

@Component({
  selector: 'app-streaming',
  imports: [],
  templateUrl: './streaming.html',
  styleUrl: './streaming.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Streaming implements OnInit, OnDestroy  {
  @ViewChild('target', {static: true}) target!: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options!: {
      autoplay: boolean,
      controls: boolean,
      sources: {
          src: string,
          type: string,
          withCredentials: boolean,
      }[],
  };

  player!: Player;

  constructor(
    private elementRef: ElementRef,
  ) {}

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    const playerOptions = {
      ...this.options,
      html5: {
        hls: {
          withCredentials: true,
          overrideNative: true,
          limitRenditionByPlayerDimensions: true,
          useDevicePixelRatio: true,
          useNetworkInformationApi: true
        }
      }
    };

    this.player = videojs(this.target.nativeElement, playerOptions, function onPlayerReady() {
      console.log('onPlayerReady');
    });
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
