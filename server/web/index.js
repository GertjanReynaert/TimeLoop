import express from 'express';
import routes from './routes/index';

const app = express();

routes(app);

const server = app.listen(5000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
