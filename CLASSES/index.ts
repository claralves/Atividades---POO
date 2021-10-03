function depositar(conta:any, valor:number):void{
    conta.saldo +=valor;
}

function sacar(conta:any, valor:number):boolean{
    if(valor <= conta.saldo){
        conta.saldo -= valor;
        return true;
    }else{
        console.log("Saldo não suficiente: Saque não autorizado");
        return false;
    }
}

function criar_conta(nome_titular:any, saldo_inicial:number):any{
    return{
        "nome_titular": nome_titular,
        "saldo": saldo_inicial,
    }
}

let conta = criar_conta("Clara", 0);

depositar(conta, 10);
console.log(conta.saldo);

sacar(conta, 5);
console.log(conta.saldo);

sacar(conta, 15);
console.log(conta.saldo);

let conta1 = {
    "nome_titular":"Maria",
    "saldo":"1000"
}

sacar(conta1, 100);
console.log(conta1.saldo);