import 'babel-polyfill';
import express from 'express';

import test from './routers/test';

const app = express();

app.use('/v1/test', test);

app.listen(8081);
