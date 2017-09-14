import { Component, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Feeds, Signs } from 'api/collections';
import { Sign } from 'api/models';
import { MeteorObservable } from 'meteor-rxjs';

/*
(<any>window).Feeds = Feeds;
(<any>window).Horoscopes = Horoscopes;
(<any>window).Signs = Signs;
*/
// import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  feeds;
  selectedSign: Sign;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.feeds = Feeds.find({}).zone()
  }

  selectSign(sign: Sign) {
    this.selectedSign = sign;
  }

  unselectSign() {
    this.selectedSign = undefined;
  }
}
