import { github } from './github';
import { trello } from './trello';

export default function (app) {
  app.get('/github', github);
  app.get('/trello', trello);

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
}
