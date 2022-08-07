
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.", 
"A dubious friend may be an enemy in camouflage.", 
"A hunch is creativity trying to tell you something.",
"A person of words and not deeds is like a garden full of weeds.",
"A truly rich life contains love and art in abundance.",
"Allow compassion to guide your decisions.",
"At the touch of love, everyone becomes a poet.",
"Depart not from the path which fate has you assigned.",
"Do not demand for someones soul if you already got his heart.",
"Dont expect romantic attachments to be strictly logical or rational.",
"From now on your kindness will lead you to success.",
"Happiness begins with facing life with a smile and a wink.",
"If you’re feeling down, try throwing yourself into your work."];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune)
    },

    addFortune: (req, res) => {
        fortunes.push(req.body.f)
        // console.log(req.body.f)
        //let x = req.body.f
        res.status(200).send(fortunes)
    },

    get_all_fortune: (req, res) => {
        res.status(200).send(fortunes)
    },

    delete_fortune: (req, res) => {
        for (let i = 0; i < fortunes.length; i++) {
            //console.log(req.query.del)
            if (fortunes[i].includes(req.query.del)) {
                fortunes.splice(i, 1)
                //console.log(fortunes[i])
            }
        }
        res.status(200).send(fortunes)
    }
}