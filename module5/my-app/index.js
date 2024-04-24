const express = require("express");
const app = express();
const port = 3000;
const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening 
at http://localhost:${port}`);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use("express.json()");
app.use("/mytest", testRoutes);
app.use("/calculator", calculatorRoutes);
app.use("/", express.static("public"));
// import all user routes (up top in index.js)
const userRoutes = require("./routes/userRoutes");
// map the user routes to our app
app.use("/users", userRoutes);
