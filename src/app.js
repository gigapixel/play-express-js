import 'babel-polyfill';
import express from 'express';
import bugsnag from 'bugsnag';

import { router as hello } from './routers/hello';

bugsnag.register('6ccbcf070657d980b68e35cdaaaf1772', { 
  logLevel: 'info',
  releaseStage: 'localhost'
});

const app = express();
app.use(bugsnag.requestHandler)

app.use('/api/hello', (req, res, next) => {
  bugsnag.notify('hello event', { 
    data: { 
      id: 1, 
      status: 'created',
      items: [{ sku: '1112' }, { sku: '1150' } ],
    },
  });
  res.status(200).json({ message: 'hello' });
});

app.use('/api/error', (req, res, next) => {
  next(new Error('Test custom error'));
});

app.use(bugsnag.errorHandler)
app.use((err, req, res, next) => {
  res.status(400).json({ message: err.message });
});

app.listen(3003);
