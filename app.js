import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import users from "./api/users/index";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users", users);

app.get("*", (req, res) => {
  res.send("Page not found.");
});

if (process.env.NODE_ENV !== "test") {
  try {
    mongoose.connect(
      "mongodb://mongo:27017/dbname",
      { useNewUrlParser: true },
      () => console.log("Connected to Mongo.")
    );
  } catch (error) {
    console.log(error);
  }

  app.listen(5000, () => console.log("Listening on port 5000"));
}

export default app;
