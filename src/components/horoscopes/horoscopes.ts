import { Component, Input, OnInit } from '@angular/core';
import { MeteorObservable, ObservableCursor } from 'meteor-rxjs';
import { Horoscopes } from 'api/collections';
import { Sign, Horoscope } from 'api/models';

/**
 * Generated class for the HoroscopesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'horoscopes',
  templateUrl: 'horoscopes.html'
})
export class HoroscopesComponent implements OnInit {
  @Input('sign') sign:Sign;
  private horoscopes: ObservableCursor<Horoscope>;

  constructor() {}

  ngOnInit() {
    console.log(this.sign._id)
    MeteorObservable.subscribe("horoscopesForSign", this.sign._id).subscribe(() => {
      this.horoscopes = Horoscopes.find({ signId: this.sign._id })
    })
  }

}
