import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Feeds, Signs, Horoscopes } from 'api/collections';
import { Sign } from 'api/models';
import { MeteorObservable } from 'meteor-rxjs';

(<any>window).Feeds = Feeds;
(<any>window).Horoscopes = Horoscopes;
(<any>window).Signs = Signs;
// import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  feeds;
  signs;
  horoscopes;
  selectedSign: Sign;

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {
    this.feeds = Feeds.find({}).zone()
    this.signs = Signs.find({}).zone()
  }

  selectSign(signId: string) {
    this.selectedSign = Signs.findOne({_id: signId});
    MeteorObservable.subscribe("horoscopesForSign", signId).subscribe(() => {
      console.log('horoscopes ready')
      this.horoscopes = Horoscopes.find({ signId: signId })
    })
    console.log(this.horoscopes)
  }

  unselectSign() {
    this.selectedSign = undefined;
  }
}
