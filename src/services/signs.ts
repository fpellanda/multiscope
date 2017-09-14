import { Injectable } from "@angular/core";
import { Signs } from 'api/collections';
import { Sign } from 'api/models';
import { MeteorObservable, ObservableCursor} from 'meteor-rxjs';
import { Observable } from 'rxjs'

@Injectable()
export class SignsService {

  public all():Observable<Sign[]> {
    MeteorObservable.subscribe('signs').subscribe(()=>{});
    return Signs.find({}).zone();
  }
}
