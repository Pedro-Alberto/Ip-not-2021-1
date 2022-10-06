function geraMensagem(id){
    if(id == 'trocaMarketplace'){
        localStorage.setItem('rastreio',prompt('Digite o rastreio'))
        rastreio = localStorage.getItem('rastreio')
        localStorage.setItem('dataentrega',prompt('Data da entrega'))
        dataentrega = localStorage.getItem('dataentrega')
        msg = 'Prezados.\n\nDe acordo com o rastreio: '+rastreio+'\nProduto chegou na data: '+dataentrega+'\nFavor agilizar processo de check-in para que possamos atender a cliente.'
        document.getElementById('txtRascunho').value = msg

    }else if(id == 'repassarAutorizacaoDePostagem'){
        localStorage.setItem('autorizacao', prompt('Autorização de postagem'))
        msg = 'Cliente ligou solicitando a postagem. Código foi informado. '+localStorage.getItem('autorizacao')
        document.getElementById('txtRascunho').value = msg

    }else if(id == 'andamentoTrocaDentrodoPrazo'){
        msg = 'Cliente entrou em contato para saber sobre o andamento da devolução de seu produto. Como ainda está dentro do prazo, foi orientado a aguardar.'
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
        
    }else if(id == 'pedidoDentrodoPrazo'){
        msg = 'Cliente entrou em contato para saber da entrega de seu pedido. Como ainda está dentro do prazo, foi orientado a aguardar.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'AlteracaoNaFormadePagamento'){
        msg = 'Cliente solicitou a alteração da forma de pagamento de cartão para boleto. Transferido para recuperação.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'pagamentoEmAnaliseDentroDoPrazo'){
        msg = 'Cliente entrou em contato para saber sobre o pagamento de seu pedido. Foi orientada que ainda está dentro do prazo de análise. Cliente está ciente e vai aguardar o prazo.'
        document.getElementById('txtRascunho').value = msg
        
    }else if(id == 'clienteDesconheceEntregasemComprovante'){
        msg = 'Pedido consta como entregue porém cliente não recebeu. Favor disponibilizar dados do recebedor e atualizar o rastreamento. Cliente aguarda um retorno.'
        document.getElementById('txtRascunho').value = msg
        
    }
}

function copiaMensagem(){
    var textoCopiado = document.getElementById('txtRascunho')
    textoCopiado.select()
    document.execCommand('copy')
}