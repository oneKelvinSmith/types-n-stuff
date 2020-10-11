import { ThingClient } from './Client';

function main() {
  const client = new ThingClient()

  client.getDoer('ADoer').do('something');
  client.getDoer('NotADoer').do('something');
  client.getDoer('NotAThing').do('something');
}

main()