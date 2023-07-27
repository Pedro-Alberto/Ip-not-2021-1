// Chamar a biblioteca do express

const express = require("express");

// Chamar todos os métodos do express para o servidor
const app = express();

// Utilizar dois métodos do express
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(5000);

// let empregados = ["Joao","Pedro","Thiago"];
let empregados = [{
     
     "Nome": "Pedro",
     "Funcao": "Assistente",
     "Salario": "1000"
 },
 {
     
     "Nome": "Thiago",
     "Funcao": "Assistente",
     "Salario": "1000"
 },
 {
     
     "Nome": "João",
     "Funcao": "Assistente",
     "Salario": "1000"
 }];

app.get("/",(req,res) => {
    const empregado = "";
    empregados.forEach((value,index) => {
        empregado += `<tr>
        <td>${index}</td>
        <td>${value.nome}</td>
        <td>${value.funcao}</td>
        <td>${value.salario}</td>
        <tr>`;
    });

    return res.send(`<!DOCTYPE html>
        <html>
        <body>
            <h1 style= "text-align: center;">ELETIVA</h1>
            <table class = "tabela">
            <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Funcao</th>
            <th>Salário</th>
            </tr>
            ${empregado}
            </table> 
        <style>
            .tabela-funcionario{
                width: 100%;
            }
        </style>
        </body>
        </html> `);
});


app.get("/:id", (req, res) => {
    const index = req.params.id;
  
   return res.json(empregados[index]);
  });


app.delete("/:id", (req, res) => {
    const index = req.params.id;
    empregados.splice(index, 1);
  
    return res.json(empregados);
  });



app.post("/", (req, res) => {
    const empregado = req.body;
    empregados.push(empregado);
  
    return res.json(funcionario);
  });

app.put("/:id", (req, res) => {
    const index = req.params.id;
    const empregado = req.body;
    empregados[index] = empregado;
  
    return res.json(empregados
    );
  });


// Não consegui subi o arquivo para o 
// servidor como foi solicitado no trabalho.