const express = require("express");
const app = express();
const db = require("./models");

db.sequelize.sync().then(() => {
  //routers
  const postRouter = require("./routes/Posts");
  app.use("/posts", postRouter);

  app.listen(3001, () => {
    console.log("run on 3001");
  });
});
