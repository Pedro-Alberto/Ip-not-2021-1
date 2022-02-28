const elEnviar = document.getElementById('enviar')
const elDestino = document.getElementById('destino')
const elOrigem = document.getElementById('origem')
const elNrovoo = document.getElementById('numerovoo')
const elLugaresdisponiveis = document.getElementById('lugaresdisponiveis')
const elResultado = document.querySelector('#resultado')
let op2
let num_voo


function encaminhar(){
    

   do { op = parseInt(prompt("             Menu 1\n" + " Digite 1 - Consultar voo.\n "  + "Digite 2 - Reservar lugar.\n " + "Digite 3 - Finalizar programa.\n "))
        switch(op){
            case 1: //Consultar voo, ele apresenta as informações sobre o voo
                num_voo = prompt("Insira o número do voo: ")
                if (num_voo === elNrovoo.value){
                    if(elLugaresdisponiveis.value <= 0){ // Se não houver mais lugares ele informa que não tem mais lugares
                        alert(`Número do voo: ${elNrovoo.value}` + `Origem: ${elOrigem.value}\n` + `Destino: ${elDestino.value}\n` + `Não há mais lugares disponiveis!`)
                        elResultado.textContent = `Número do voo: ${elNrovoo.value}` + `Origem: ${elOrigem.value}\n` + `Destino: ${elDestino.value}\n` + `Lugares disponiveis: ${elLugaresdisponiveis.value}\n`
                    }
                    else if(elLugaresdisponiveis.value > 0){ // Se houver lugares, ele informa a quantidade de lugares disponiveis
                        alert(`Número do voo: ${elNrovoo.value}` + `Origem: ${elOrigem.value}\n` + `Destino: ${elDestino.value}\n` + `Não há mais lugares disponiveis: ${elLugaresdisponiveis.value}\n`)
                        elResultado.textContent = `Número do voo: ${elNrovoo.value}` + `Origem: ${elOrigem.value}\n` + `Destino: ${elDestino.value}\n` + `Lugares disponiveis: ${elLugaresdisponiveis.value}\n`
                    }
                }
            break

            case 2:
                num_voo = prompt("Insira o número do vôo: ")
                if (num_voo === elNrovoo.value){
                    if(elLugaresdisponiveis.value > 0){
                        elLugaresdisponiveis.value --
                        alert(`Reserva confirmada!\n` + `Lugares restantes: ${elLugaresdisponiveis.value}`)
                        elResultado.textContent = `Reserva confirmada!\n` + `Lugares restantes: ${elLugaresdisponiveis.value}`
                    }
                    else if(elLugaresdisponiveis.value <= 0){
                        alert("Não há mais lugares disponiveis")
                        elResultado.textContent = "Não há mais lugares disponiveis"
                    }
                }
            break

        }
    
    } while(op <= 2)
 
}
elEnviar.addEventListener('click', encaminhar)