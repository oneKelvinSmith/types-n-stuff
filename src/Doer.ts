export interface Doable {
  do(toDo: string): void
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

