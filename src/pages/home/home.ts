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
  signs;
  selectedSign: Sign;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.feeds = Feeds.find({}).zone()
    this.signs = Signs.find({}).zone()
  }

  selectSign(signId: string) {
    this.selectedSign = Signs.findOne({_id: signId});
  }

  unselectSign() {
    this.selectedSign = undefined;
  }
}
