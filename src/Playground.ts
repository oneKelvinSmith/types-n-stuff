import { Doer } from './Doer';

export namespace Playground {
  export namespace Things {
    export interface Thingable {
      isThing: boolean
    }

    export class ADoer extends Doer implements Thingable {
      public isThing = true
    }

    export class NotADoer implements Thingable {
      public isThing = true
    }

    export class NotAThing implements Thingable {
      public isThing = false
    }
  }
}