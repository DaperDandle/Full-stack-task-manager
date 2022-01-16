const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.status(200).send("Hello");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  // make sure database is connected before starting server
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`The server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
