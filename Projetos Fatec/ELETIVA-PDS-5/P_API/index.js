//chamar a biblioteca express
const express = require('express');

//armazenar na variavel server a biblioteca express()
const server = express();
server.use(express.json());
//chamar a função listen para "escutar a porta em que vamos utilizar"
server.listen(3500);

// Criando a rota get para testar a API

/*server.get('/teste', () => {
    console.log('Deu certo')
})
*/

//Vamos criar dois parametros REQ -> representa os dados da aplicação e RES -> representa os dados que vai para o frontend
/*server.get('/teste', (req, res) => {
    return res.send.json('Hello World');
})

*/

// server.get('/teste', (req, res) => {
//     return res.json({teste: 'Hello World'});
// })

// server.get('/teste', (req, res) => {
//     const escola = req.query.escola;
//     return res.json({teste: `Estamos estudando na ${escola}`});
// })

// server.get('/teste/:nome', (req, res) => {
//     const nome = req.params.nome;
//     return res.json({teste: `Bem vindo: ${nome}`});
// })

let nomes = ['Clark', 'Bruce', 'Louis', 'Dianna'];

//#region CRUD

//Create de um valor
server.post('/nomes', (req, res) => {
    const { name } = req.body
    nomes.push(name);
    return res.json(nomes);
    //return res.send(<h1> Cadastro concluido <h1>)
})

//Read de vários valores
server.get('/nomes', (req, res) => {
    return res.json(nomes);
})

//Read de um unico valor
server.get('/nomes/:index', (req, res) => {
    const {index} = req.params;
    return res.send(
        `<!DOCTYPE html>
        <body style = "text-align:center">
            <h1>Desafio!</h1>
            <h1>Bem vindo <b style = "color:red">${nomes[index]}</b></h1>
        </body>
        </html>`
    );
})
