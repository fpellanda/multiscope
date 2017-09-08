import { MongoObservable } from 'meteor-rxjs';
import { Sign } from '../models';
 
export const Signs = new MongoObservable.Collection<Sign>('signs');