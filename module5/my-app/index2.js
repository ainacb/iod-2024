const express = require("express");
const app = express();
const port = 3000;
const app1 = express();
const port1 = 8000;
const app2 = express();
const port2 = 5000;
const app3 = express();
const port3 = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app1.get("/test", (req, res) => {
  res.send("This is a test");
});

app2.get("/", (req, res) => {
  res.send("Hello World from app2");
});
app3.get("/", (req, res) => {
  res.send("Hello World from app3");
});

// app.listen(port, () => {
//   console.log(`Example app listening
// at http://localhost:${port}`);
// });

app1.listen(port1, () => {
  console.log(`Example app listening 1
at http://localhost:${port1}`);
});

app2.listen(port2, () => {
  console.log(`Example app listening 2
at http://localhost:${port2}`);
});

app3.listen(port3, () => {
  console.log(`Example app listening 3
at http://localhost:${port3}`);
});
