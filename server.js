const express = require("express");

const fs = require("fs");
console.log(fs.readdirSync("./"));

const { usersModel } = require("./models");

//Create sample data
// const dateNow = () => {
//   let d = new Date();
//   let yyyy = d.getFullYear();
//   let MM = ("0" + (d.getMonth() + 1)).slice(-2);
//   let dd = ("0" + d.getDate()).slice(-2);
//   return `${yyyy}-${MM}-${dd}`;
// };

// usersModel.create({
//   name: "testName",
//   group: "testGroup",
//   date: dateNow(),
// });

const app = express();

const port = process.env.PORT || 3030;

app.get("/user", (req, res) => {
  usersModel.findAll().then((data) => {
    res.json(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
