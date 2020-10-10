import { ThingClient } from './Client';

function main() {
  const client = new ThingClient()

  const doer = client.getDoer('NotADoer');

  doer.do('something');
}

main()