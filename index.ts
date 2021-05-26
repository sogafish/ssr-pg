import express from 'express';
import { server } from './src/server';

const port = 3000;

const app = express();
app.listen(port);

app.get('/', (_, res) => {
  res.send(server())
});
