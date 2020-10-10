import { Doer, NoOpDoer } from './Doer';
import { ThingClient } from './Client';

describe('ThingClient', () => {
  describe('#getDoer', () => {
    it('returns a thing that does something', () => {
      const client = new ThingClient()
      expect(client.getDoer('ADoer')).toBeInstanceOf(Doer)
    });

    it('returns a NoOpDoer if the thing isn\'t a doer', () => {
      const client = new ThingClient()
      expect(client.getDoer('NotADoer')).toBeInstanceOf(NoOpDoer)
    });
  })
});