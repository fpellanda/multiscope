import { Component, EventEmitter, Output } from '@angular/core';
import { Sign } from 'api/models';
import { Signs } from 'api/collections'
import { SignsService } from '../../services'
import { Observable } from 'rxjs'

@Component({
  selector: 'signs',
  templateUrl: 'signs.html'
})
export class SignsComponent {
  @Output() select: EventEmitter<Sign> = new EventEmitter<Sign>();

  constructor(private signsService: SignsService ) { }
  allSigns: Observable<Sign[]>;

  ngOnInit() {
    this.allSigns = this.signsService.all();
  }

  selectSign(sign: Sign) {
    this.select.emit(sign);
  }
}
