function geraMensagem(id){
    if(id == 'desconhece-dadoscadastrais'){
        localStorage.setItem('cpf',prompt('Digite o CPF do cliente:'))
        cpf = localStorage.getItem('cpf')
        localStorage.setItem('nome',prompt('Digite o nome completo do cliente:'))
        nome = localStorage.getItem('nome')
        localStorage.setItem('nascimento',prompt('Digite a data de nascimento do cliente:'))
        nascimento = localStorage.getItem('tel')
        localStorage.setItem('tel',prompt('Digite o atual telefone do cliente:'))
        tel = localStorage.getItem('tel')
        localStorage.setItem('email',prompt('Digite o e-mail do cliente:'))
        email = localStorage.getItem('email')
        msg = 'DESCONHECE DADOS DO CADASTRO\nPrezados,\nCliente desconhece os dados do cadastro, por gentileza realizar correção.\nConfirmação de dados:\nCPF: '+cpf+'\nNome: '+nome+'\nNascimento: '+nascimento+'\nTel.: '+tel+'\n E-mail: '+email+''
        document.getElementById('txtRascunho').value = msg

    }else if(id == 'repassarAutorizacaoDePostagem'){
        localStorage.setItem('autorizacao', prompt('Autorização de postagem'))
        msg = 'Cliente ligou solicitando a postagem. Código foi informado. '+localStorage.getItem('autorizacao')
        document.getElementById('txtRascunho').value = msg

    }else if(id == ''){
        msg = 
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'andamentoTrocaDentrodoPrazo'){
        msg = 'Cliente entrou em contato para saber sobre o andamento da devolução de seu produto. Como ainda está dentro do prazo, foi orientado a aguardar.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'postagemManual'){
        msg = 'Cliente solicitou código de postagem. Devido erro no sistema, foi solicitado código de postagem manual. Cliente está ciente do prazo para envio.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'autorizacaoPostagemMKTPDentrodoPrazo'){
        msg = 'Cliente cobrou o código de autorização de postagem, porém como ainda está dentro do prazo de envio do lojista, foi orientado a aguardar.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'clienteSemRastreioTroca'){
        msg = 'Cliente entrou em contato para saber sobre sua troca. Foi orientado que precisamos do rastreamento para conseguir cobrar o lojista. Cliente retornará o contato com o código.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'solicitadoReenvioRemoto'){
        msg = 'Cliente ligou solicitando reenvio de seu pedido. Solicitação foi colocada no remoto para o CD.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'semRastreioDentrodoPrazo'){
        msg = 'Cliente solicitou código de rastreio de seu pedido. Como ainda está dentro do prazo de atualização, foi orientado a aguardar e acompanhar pelo site.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'protocoloDentrodoPrazo'){
        msg = 'Cliente solicitou informações sobre seu pedido. Como já tem um protocolo em tratativa, cliente foi orientado a aguardar o prazo.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'canceladoPorFaltadeItem'){
        msg = 'Cliente entrou em contato para saber sobre a entrega de seu pedido. Foi orientada que por falta de item no estoque, o pedido foi cancelado e será ativado um vale em seu cadastro. Cliente está ciente.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'retiradaNosCorreios'){
        localStorage.setItem('rastreio', prompt('Informe o rastreio do pedido:'))
        msg = 'Cliente entrou em contato para saber sobre o rastreamento de seu pedido. Foi orientado que produto está nos Correios aguardando retirada. Cliente está ciente do código de rastreio '+localStorage.getItem('rastreio')+' e vai retirar.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'Posvendas'){
        msg = 'Transferencia pós vendas\nCliente deseja informações de pós vendas, mediante posicionamento/autorização da supervisão, ligação transferida ao pós venda'
        document.getElementById('txtRascunho4').value = msg
        
    }else if(id == 'Televendas'){
        msg = 'Transferência Televendas\nCliente com dificuldades para finalizar compra pelo site, foi transferido para o televendas'
        document.getElementById('txtRascunho4').value = msg
        
    }else if(id == 'Recuperacao'){
        msg = 'Transferência Recuperação\nCliente com dificuldades para finalização do pagamento, foi transferida para recuperação.'
        document.getElementById('txtRascunho4').value = msg
        
    }else if(id == 'RA'){
        msg = 'Transferência reclame aqui\nCliente tem abertura de protocolo com o reclame aqui, foi transferido para area responsavel.'
        document.getElementById('txtRascunho4').value = msg
        
    }else if(id == 'OE'){
        msg = 'Transferência operações especiais\nCliente tem abertura de protocolo com operações especiais, foi transferido para area responsavel.'
        document.getElementById('txtRascunho4').value = msg
        
    }else if(id == 'protocolo'){
    localStorage.setItem('rastreio',prompt('Digite o nome do cliente:'))
        nome = localStorage.getItem('rastreio')
        localStorage.setItem('protocolo',prompt('Digite o protocolo do atendimento:'))
        protocolo = localStorage.getItem('protocolo')
        msg = 'Olá '+nome+', tudo bem\n\nSegue o número do protocolo de atendimento abaixo:\n\n'+protocolo+'\n\nQualquer dúvida estamos a disposição!\n\nAgradecemos desde já!\n\nAtenciosamente,\nLuiza Resolve | Central de Atendimento'
        document.getElementById('txtRascunho6').value = msg
    }

}

function copiaMensagem(){
    var textoCopiado = document.getElementById('txtRascunho')
    textoCopiado.select()
    document.execCommand('copy')
}

function copiaMensagem2(){
    var textoCopiado = document.getElementById('txtRascunho2')
    textoCopiado.select()
    document.execCommand('copy')
}

function copiaMensagem3(){
    var textoCopiado = document.getElementById('txtRascunho3')
    textoCopiado.select()
    document.execCommand('copy')
}

function copiaMensagem4(){
    var textoCopiado = document.getElementById('txtRascunho4')
    textoCopiado.select()
    document.execCommand('copy')
}

function copiaMensagem5(){
    var textoCopiado = document.getElementById('txtRascunho5')
    textoCopiado.select()
    document.execCommand('copy')
}

function copiaMensagem6(){
    var textoCopiado = document.getElementById('txtRascunho6')
    textoCopiado.select()
    document.execCommand('copy')
}