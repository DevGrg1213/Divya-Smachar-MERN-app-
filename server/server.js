require("dotenv").config();
const express = require("express");
const cors = require("cors");
const newsRouter = require("./routes/newsRoutes");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use("/api/news", newsRouter);
app.listen(process.env.PORT, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
