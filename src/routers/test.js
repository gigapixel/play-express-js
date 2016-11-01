import express from 'express';

const router = express.Router();
router.get('/', test);

async function test(req, res) {
  res.json({data: "It's work 555."});
}

export default router;
