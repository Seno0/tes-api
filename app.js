const express = require("express");
const app = express();
const PORT = 8000 || 8080;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", (req, res) => {
  res.send("welcome to server");
});

app.listen(PORT, () => {
  console.log(`app running at PORT: ${PORT}`);
});
