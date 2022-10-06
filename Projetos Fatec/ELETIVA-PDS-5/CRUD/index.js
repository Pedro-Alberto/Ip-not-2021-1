const express = require('express');

const app = express();
app.use(express.json());
let animes = ['DBZ', 'Naruto', 'Bleach', 'Shaman King', 'CDZ', 'FLY']
// C - Create
app.post("/register", (req, res) => {
    //novos dados no banco
    const { anime } = req.body;
    animes.push(anime)
    return res.json(anime)
})

// R - READ
app.get('/recive', (req, res) =>{
    return res.json(animes)
})

app.get('/recive/:index', (req, res) => {
    const { index } = req.params
    return res.json(animes[index])
})

// U - Update
app.put('/update', (req, res) => {
    const { index, anime } = req.body
    animes[index] = anime
    return res.json(animes)
})

app.put("/update/:index", (req, res) => {
    const {index} = req.params;
    const {anime} = req.body
    
    animes[index] = anime;
    return res.json(animes);
});

// app.get('/animes', (req, res) => {
//     console.log(animes);
// })


// D- DELETE
app.delete('/delete', (req, res) => {
    const { index } = req.body;
    animes.splice(index, 1);
    return res.json(animes)
})

app.delete('/delete/:index', (req, res) => {
    const {index} = req.params;
    animes.splice(index, 1)
    return res.json(animes)
})
app.listen(8080);