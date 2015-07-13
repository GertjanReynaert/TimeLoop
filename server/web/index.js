import express from 'express';
import routes from './routes/index';

const app = express();
const router = express.Router();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const server = app.listen(5000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
