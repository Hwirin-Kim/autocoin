import express from "express";
import router from "./router/router";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "port");
});
