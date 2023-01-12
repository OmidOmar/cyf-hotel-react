const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const bookingData = require("./booking.json");

app.use(express.static(path.resolve(__dirname, "../build")));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

app.get("/api/delayed", async (req, res) => {
  await sleep(500);
  res.json(bookingData);
});

app.get("/guest", (req, res) => {
  res.json({ message: "hello from server" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(port);
