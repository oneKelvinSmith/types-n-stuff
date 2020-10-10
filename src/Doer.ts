export interface Doable {
  do(toDo: string): void
}

export function isDoer(thing: any): thing is Doer {
  return Boolean(thing && thing.prototype) && thing.prototype instanceof Doer
}

export class Doer implements Doable {
  constructor(private func: (toDo: string) => void) {
  }

  do(toDo: string): void {
    this.func(toDo)
  }
}

export class NoOpDoer extends Doer {
  constructor() {
    super((toDo: string) => console.debug(`Doing nothing even though you want me to do ${toDo}`));
  }
}

