const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const fortuneBtn = document.getElementById("fortuneButton")
fortuneBtn.addEventListener('click', getFortune)




let form = document.querySelector(".f1")
form.addEventListener("submit", getCars)

function getCars(event) {
    event.preventDefault()
    let input = document.querySelector(".i1")
    let year = input.value
    axios.get(`http://localhost:4000/api/cars/${year}`)
    .then(res => {
        console.log(res.data.imageURL)
        for (let i = 0; i < 3; i++) {
            let new_div = document.createElement("div")
            new_div.classList.add("column")
            new_img = document.createElement("img")
            new_img.src = res.data.imageURL[i]
            let new_p = document.createElement("p")
            new_p.innerHTML = res.data.price[i]
            new_p.classList.add("bigger_image")
            new_div.appendChild(new_img)
            new_div.appendChild(new_p)
            document.querySelector(".car_container").appendChild(new_div)
           }
    }).catch(error => console.log(error))
}

// function create_car(cars) {
//    for (let i = 0; i < 3; i++) {
//     let new_div = document.createElement("div")
//     new_img = document.createElement("img")
//     new_img.src = cars.imgURL[i]
//     let new_p = document.createElement("p")
//     new_p.textContent = cars.year[i]
//     new_div.appendChild(new_img)
//     new_div.appendChild(new_p)
//     document.querySelector(".car_container").appendChild(new_div)
//    }

// }


let form2 = document.querySelector(".f2")
form2.addEventListener("submit", addFortune)





function addFortune(event) {
event.preventDefault()
let input = document.querySelector(".i2")
let newFortune = input.value
let fortune_to_send = {
    f: newFortune
}
axios.post("http://localhost:4000/api/fortune", fortune_to_send)
.then(res => console.log(res.data))
.catch(error => console.log(error))

}