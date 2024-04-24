const express = require("express");
const router = express.Router();

// new route for adding two numbers
// router.get("/add", (req, res) => {
//   res.send("Add");
// });

// router.get("/add", (req, res) => {
//   console.log(req.query);
//   res.send(req.query);
// });

router.get("/add", (req, res) => {
  console.log(req.query);
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

router.get("/subtract", (req, res) => {
  console.log(req.query);
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let difference = number1 - number2;
  console.log(difference);
  res.status(200);
  res.json({ result: difference });
});

router.get("/multiply", (req, res) => {
  console.log(req.query);
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let result = number1 * number2;
  console.log(result);
  res.status(200);
  res.json({ result: result });
});

router.get("/divide", (req, res) => {
  console.log(req.query);
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let quotient = number1 / number2;
  console.log(quotient);
  res.status(200);
  res.json({ result: quotient });
});
module.exports = router;
