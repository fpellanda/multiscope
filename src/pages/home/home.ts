import { Component, NgModule, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Feeds, Signs } from 'api/collections';
import { Sign } from 'api/models';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  selectedSign: Sign;

  constructor(public navCtrl: NavController) {
  }

  selectSign(sign: Sign) {
    this.selectedSign = sign;
  }

  unselectSign() {
    this.selectedSign = undefined;
  }
}
