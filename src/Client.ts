import { Doer, isDoer, NoOpDoer } from './Doer';
import { Playground } from './Playground';

const things = Playground.Things;
type Things = typeof Playground.Things
type ThingNames = keyof Things

export interface Client {
  getDoer<T extends ThingNames>(thingName: T): Doer;
}

export class ThingClient implements Client {
  getDoer<T extends ThingNames>(thingName: T): Doer {
    const constructor: Things[T] = things[thingName]
    const doerFunc = (toDo: string) => { console.log(`Doing ${toDo}`) }

    if (isDoer(constructor)) {
      return new constructor(doerFunc) as Doer
    }

    return new NoOpDoer()
  }
}