import { Injectable } from "@angular/core";
import { Horoscopes } from 'api/collections';
import { Horoscope, Sign } from 'api/models';
import { MeteorObservable, ObservableCursor} from 'meteor-rxjs';
import { Observable } from 'rxjs'

@Injectable()
export class HoroscopesService {

  public find(sign: Sign):Observable<Horoscope[]> {
    MeteorObservable.subscribe("horoscopesForSign", sign._id).subscribe(() => { })
    return Horoscopes.find({ signId: sign._id })
  }
}