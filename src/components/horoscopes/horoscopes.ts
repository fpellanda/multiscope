import { Component, Input, OnInit } from '@angular/core';
import { Horoscopes, Feeds } from 'api/collections';
import { Sign, Horoscope } from 'api/models';
import { HoroscopesService } from '../../services';
import { Observable } from 'rxjs'

@Component({
  selector: 'horoscopes',
  templateUrl: 'horoscopes.html'
})
export class HoroscopesComponent implements OnInit {
  @Input('sign') sign:Sign;
  private horoscopes: Observable<Horoscope[]>;

  constructor(private horoscopesService: HoroscopesService) {}

  ngOnInit() {
    this.horoscopes = this.horoscopesService.find(this.sign);
  }

  feedForHoroscope(horoscope: Horoscope) {
    return Feeds.findOne({ _id: horoscope.feedId });
  }
}
