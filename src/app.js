import express from 'express';
import { router as hello } from './routers/hello';

const app = express();

app.use('/api/hello', hello);

app.listen(3003);
