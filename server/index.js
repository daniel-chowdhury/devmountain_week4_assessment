const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune } = require('./controller')

const cars_array = [
    {
      year: 2019,
      imageURL: ["./11.jpg", "./22.jpg", "./33.jpg"],
      price: [290000, 56000, 65880]
    },
    {
      year: 2020,
      imageURL: ["./44.jpg", "./55.jpg", "./66.jpg"],
      price: [330000, 56000, 894500]
    }
  ]

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)

app.get("/api/cars/:year", (req, resp) => {
if (req.params.year == 2019) {
    resp.status(200).send(cars_array[0])
} else if (req.params.year == 2020){
    resp.status(200).send(cars_array[1])
}
})

app.post("/api/fortune", addFortune)

app.listen(4000, () => console.log("Server running on 4000"));
