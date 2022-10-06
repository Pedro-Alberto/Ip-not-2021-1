// Chamar a biblioteca do express

const express = require("express");

// Chamar todos os métodos do express para o servidor
const app = express();

// Utilizar dois métodos do express
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(5000);

// let cores = ["Joao","Pedro","Thiago"];
let cores = [{
     "Id":"0",
     "Nome": "Pedro",
     "Funcao": "Assistente",
     "Salario": "1000"
 },
 {
     "Id":"1",
     "Nome": "Thiago",
     "Funcao": "Assistente",
     "Salario": "1000"
 },
 {
     "Id":"2",
     "Nome": "João",
     "Funcao": "Assistente",
     "Salario": "1000"
 }];

app.post("/register", (req, res) => {
    const {Id, Nome, Funcao, Salario}  = req.body;
    cores.push(Id,Nome,Funcao,Salario);
    return res.send(cores);
})

app.post("/delete", (req, res) => {
    const { color } = req.body;
    let index = 0;
    for(let i = 0; i < cores.length; i++){
        if(color == cores[i]){
            index = i;
        }

    }
    cores.splice(index, 1);
    return res.send(cores);
})

app.post("/update", (req, res) => {
    const { color } = req.body;
    
    for(let i = 0; i < cores.length; i++){
        if(color == cores[i]){
            cores[i] = color
        }

    }
    
    return res.send(cores);
})

