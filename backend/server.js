const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./database/connect");
const Card = require("./database/models/request");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.redirect("/ping");
});

app.get("/ping", (req, res) => {
  res.send("Server is Running");
});

//Get all Cards API
app.get("/cards", async (req, res) => {
  try {
    const card = await Card.find();
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cards" });
  }
});

//Create a Card API
app.post("/cards", async (req, res) => {
  const { id, title, description } = req.body;

  if (!id || !title || !description) {
    res
      .status(400)
      .json({ error: "All fields (title, description, link) are required" });
  }
  try {
    const newCard = await Card.create({ id, title, description });
    res.status(201).json({ msg: "Card Created successfully", newCard });
  } catch (error) {
    res.status(500).json({ error: "Failed to create card" });
  }
});

//Get Card with Title
app.get("/cards/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res
        .status(404)
        .json({ error: `Card not found with Title ${title} ` });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch card with given Title" });
  }
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI).then(() => {
      console.log("Database Connected Successfully");
    });
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
