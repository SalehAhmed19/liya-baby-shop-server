// LB_DBUser, rPob0tJDsnFYjKas
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
// const jwt = require("jsonwebtoken");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://LB_DBUser:rPob0tJDsnFYjKas@cluster0.syanudb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const dressBabyGirlCollection = client
      .db("liya-baby-shop")
      .collection("babyDressGirl");

    // get all the items api
    app.get("/api/baby-girl-dress", async (req, res) => {
      const query = {};
      const cursor = dressBabyGirlCollection.find(query);
      const dressBabyGirl = await cursor.toArray();
      res.send(dressBabyGirl);
    });
  } finally {
    //
  }
}
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});
