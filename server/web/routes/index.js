import { github } from './github';
import { trello } from './trello';

export default function (app) {
  app.post('/github', github);
  app.post('/trello', trello);

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
}
