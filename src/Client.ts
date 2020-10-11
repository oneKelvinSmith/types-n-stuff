import { Doer, NoOpDoer } from './Doer';
import { Playground } from './Playground';

const things = Playground.Things
type Things = typeof Playground.Things
type ThingNames = keyof Things

export interface Client {
  getDoer<T extends ThingNames>(thingName: T): Doer;
}

export class ThingClient implements Client {
  getDoer<T extends ThingNames>(thingName: T): Doer {
    const constructor = things[thingName]
    const doerFunc = (toDo: string) => { console.log(`Doing ${toDo}`) }

    if (constructor.prototype instanceof Doer) {
      return new constructor(doerFunc) as Doer
    }

    return new NoOpDoer()
  }
}