import express from "express";
const router = express.Router();

const data = { text: "Data is correct" };

router.get('/', async(req, res, next) => {
  res.send(JSON.stringify(data));
});

export default router;
