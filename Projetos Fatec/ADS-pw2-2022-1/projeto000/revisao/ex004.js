function somar(){
    var txtn1 = document.getElementById('txtn1');
    var txtn2 = document.getElementById('txtn2');
    var resp = document.getElementById('resp');

    var n1 = Number(txtn1.value);
    var n2 = Number(txtn2.value);
    var soma = n1+n2;
    resp.innerHTML = `Soma ${n1}+${n2}=${soma}`;
}

function limpar(){
    document.getElementById(`txtn1`).value = "";
    document.getElementById(`txtn2`).value = "";
    document.getElementById(`resp`).innerHTML = "";
    document.getElementById(`txtn1`).focus();
} 