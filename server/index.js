import express from "express";
import cors from "cors";
import Connection from "./database/db.js";
import Router from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const PORT = 5000;

Connection();
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
