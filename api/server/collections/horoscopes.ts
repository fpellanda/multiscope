import { MongoObservable } from 'meteor-rxjs';
import { Feed, Sign, Horoscope } from '../models';
import { Signs, Feeds } from '.'

export const Horoscopes = new MongoObservable.Collection<Horoscope>('horoscopes');