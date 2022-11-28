const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(cors());

app.get("/feed", (req, res) => {
  res.json([
    {
      vendor: "fb",
      handler: "@nathanf",
      amount: 1987,
      ranking: 12,
    },
    {
      vendor: "twitter",
      handler: "@nathanf",
      amount: 1044,
      ranking: 99,
    },
    {
      vendor: "ig",
      handler: "@nathanf",
      amount: 11223,
      ranking: 99,
    },
    {
      vendor: "yt",
      handler: "Nathan F",
      amount: 8239,
      ranking: -144,
    },
  ]);
});

app.get("/overview", (req, res) => {
  res.json([
    {
      vendor: "fb",
      label: "Page Views",
      amount: 87000,
      ranking: 3,
    },
    {
      vendor: "fb",
      label: "Likes",
      amount: 52,
      ranking: -2,
    },
    {
      vendor: "ig",
      label: "Likes",
      amount: 5462,
      ranking: 2257,
    },
    {
      vendor: "ig",
      label: "Profile Views",
      amount: 52062,
      ranking: 1375,
    },
    {
      vendor: "twitter",
      label: "Retweets",
      amount: 117,
      ranking: 303,
    },
    {
      vendor: "twitter",
      label: "Likes",
      amount: 507,
      ranking: 553,
    },
    {
      vendor: "yt",
      label: "Likes",
      amount: 107,
      ranking: -19,
    },
    {
      vendor: "yt",
      label: "Total Views",
      amount: 1407,
      ranking: -12,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
