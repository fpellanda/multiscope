import { Component, EventEmitter, Output } from '@angular/core';
import { Sign } from 'api/models';
import { Signs } from 'api/collections'

/**
 * Generated class for the SignsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'signs',
  templateUrl: 'signs.html'
})
export class SignsComponent {
  @Output() select: EventEmitter<Sign> = new EventEmitter<Sign>();
  signs;

  constructor() { }

  ngOnInit() {
    this.signs = Signs.find({}).zone()
  }

  selectSign(sign: Sign) {
    this.select.emit(sign);
  }
}
