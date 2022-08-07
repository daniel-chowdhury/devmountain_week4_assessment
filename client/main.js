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

//*************************************************************car feature start*************************************** */


let form = document.querySelector(".f1")
form.addEventListener("submit", getCars)

function getCars(event) {
    event.preventDefault()
    let input = document.querySelector(".i1")
    let year = input.value
    axios.get(`http://localhost:4000/api/cars/${year}`)
    .then(resp => create_car(resp.data))
    .catch(error => console.log(error))
}

function update_car(event) {
    event.preventDefault()
    let new_price = event.target.childNodes[0].value
    let price_to_send = {p: new_price}
    let car_id = event.target.parentNode.childNodes[1].id
    console.log(car_id)
    axios.put(`http://localhost:4000/api/cars/query/?id=${car_id}`, price_to_send)
    //.then(resp => console.log(resp.data))
    .then(resp => {
        console.log(resp.data)
        create_car(resp.data)
    })
    .catch(error => console.log(error))
}


function create_car(cars_by_year) {
        if (document.querySelector(".car_container")) {
            document.querySelector(".car_container").remove()
            let CarContainerDiv = document.createElement("div")
            CarContainerDiv.classList.add("car_container")
            document.querySelector(".section1").appendChild(CarContainerDiv)
        } 
        for (let i = 0; i < 3; i++) {
            let new_div = document.createElement("div")
            new_div.classList.add("column")
            new_img = document.createElement("img")
            new_img.src = cars_by_year.imageURL[i]
            let new_p = document.createElement("p")
            new_p.innerHTML = cars_by_year.price[i]
            let car_id = cars_by_year.id[i]
            new_p.classList.add("bigger_image")
            new_p.setAttribute("id", car_id)
            new_div.appendChild(new_img)
            new_div.appendChild(new_p)
            let new_form = document.createElement("form")
            let new_input = document.createElement("input")
            new_input.placeholder = "Enter new price for above car"
            let new_button = document.createElement("button")
            new_button.innerHTML = "Update price"
            new_form.appendChild(new_input)
            new_form.appendChild(new_button)
            new_form.addEventListener("submit", update_car)
            new_div.appendChild(new_form)
            document.querySelector(".car_container").appendChild(new_div)
           }
    }




//*************************************************************car feature end*************************************** */
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
.then(res => populate_fortunes(res.data))
.catch(error => console.log(error))

}

// function populate_fortunes() {
// axios.get("http://localhost:4000/api/fortune/all")
// .then(res => {

// })
// }

function populate_fortunes(fortunes) {
    if (document.querySelector("ul")) {
        document.querySelector("ul").remove()
        let fortune_container = document.createElement("ul")
        //fortune_container.classList.add("tbd")
        document.querySelector(".section2").appendChild(fortune_container)
    for (let i = 0; i < fortunes.length; i++) {
        let entry = document.createElement("li")
        entry.textContent = fortunes[i]
        document.querySelector("ul").appendChild(entry)
    }
}
}

let form3 = document.querySelector(".f3")
form3.addEventListener("submit", event => {
    event.preventDefault()
    let input = document.querySelector(".i3")
    let inputvalue = input.value
    inputvalue = inputvalue.trim()
    let array = inputvalue.split(' ')
    for (let i = 0; i < array.length; i++) {
    array[i] = array[i].trim()
    }
    let inputvalue2 = array.join('')
    axios.delete(`http://localhost:4000/api/fortune/?del=${inputvalue2}`)
    .then(res => populate_fortunes(res.data))
    .catch(error => console.log(error))
})

axios.get("http://localhost:4000/api/fortune/all")
.then(res => populate_fortunes(res.data))
.catch(error => console.log(error))