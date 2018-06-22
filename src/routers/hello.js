import { Router } from 'express';

export const router = new Router();
router.get('/', hello);

async function hello(req, res, next) {
  res.status(200).json({ message: 'hello express on k8s' });
}
