const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addFortune, get_all_fortune, delete_fortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)


let cars_array = require("./cars.json")

app.get("/api/cars/:year", (req, resp) => {
if (req.params.year == 2019) {
    resp.status(200).send(cars_array[0])
} else if (req.params.year == 2020){
    resp.status(200).send(cars_array[1])
} else if (req.params.year == 2021){
  resp.status(200).send(cars_array[2])
}
})

app.put("/api/cars/query", (req, resp) => {
  let send = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (cars_array[i].id[j] == req.query.id) {
        cars_array[i].price[j] = `$${req.body.p}`
        send = i
        break
      }
    }
  }
  resp.status(200).send(cars_array[send])
})

app.post("/api/fortune", addFortune)


app.get("/api/fortune/all", get_all_fortune)

app.delete("/api/fortune", delete_fortune)

app.listen(4000, () => console.log("Server running on 4000"));
