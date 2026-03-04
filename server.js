const express = require("express");
const morgan = require("morgan");
const path = require("path");

const pageRouter = require("./routers/pageRouter");
const apiRouter = require("./routers/apiRouter");

const app = express();
const PORT = process.env.PORT || 3000;

//MiddleWare
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

//Routers
app.use("/", pageRouter);
app.use("/api", apiRouter);

//API 404
app.use("/api/*rest", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});
//General 404
app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});

app.listen(PORT, () => {
  console.log(`Created process at PID: ${process.pid}`);
  console.log(`Listening on port: ${PORT}`);
  console.log(`Try: http://localhost:${PORT}`);
});
