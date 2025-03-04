import express from "express"
const router = express.Router();

const data = "Data is incorrect";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(data));
});

export default router;
