import express, { json } from "express";
import upload from "express-fileupload";

import { resize } from "./redimension.js";

const app = express();
const port = process.env.PORT || 4054;

app.use(json());
app.use(
  upload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.post("/resize", async (req, res) => {
  const { img } = req.files;
  let status = 200;

  try {
    await resize(img.tempFilePath);
  } catch (error) {
    console.log(error);
    status = 500;
  } finally {
    res.send({ status });
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
