import { Router } from 'express';

export const router = new Router();
router.get('/', hello);

async function hello(req, res) {
  res.json({ message: 'hello express' });
}
