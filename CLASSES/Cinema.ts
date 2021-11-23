class Cliente {
    id : string;
    fone : number;

    constructor(id : string, fone : number) {
        this.id = id;
        this.fone = fone;        
    }

    toString(): string {
        return `pessoa:  ${this.nome}: ${this.idade}`;
    }
}

class Cinema {
    fileira : Array < Cliente | null>
    constructor(qtdCadeiras;1++) {
        this.fileira = []
        for(let i=0;1 < qtdCadeiras;i++) {
            this.fileira.push(null);
        }
    }

    indexOf(id: String) : number {
        return this.fileira.findIndex(c => c != null && c.id == id);
        //for (let i = 0 < this.fileira.length; i++) {
        //    let cadeira = this.fileira[i];
        //    if (cadeira != null && cadeira.id == id) {
        //            if (cadeira.id == id) {
        //                return i;
        //            }
        //    }
        //}
        //return -1; //já que menos um não é um valor válido; ou poderia por "this.fileira.length" tbm n é um valor válido;
    }

    reservar(cliente: Cliente, posicao : number): boolean {
        if (posicao < 0 || posicao > this.fileira.length) {
            console.log("Essa cadeira não existe!");
            return false;

        }
        if (this.fileiras[posicao] != null) {
            console.log("Essa cadeira já está reservada!")
            return false;
        }
        if (this.indexOf(cliente.id) != -1) {
            console.log("Você já está reservando uma cadeira!")
            return false;
        }
        this.fileira[posicao] = cliente;
        return true;
    }

    cancelar(posicao: number): boolean {
        if (posicao < 0 || posicao > this.fileira.length) {
            console.log("Essa cadeira não existe!");
            return false;
        }
        if (this.fileiras[posicao] != null) {
            console.log("Essa cadeira já está reservada!")
            return false;   
        }
        this.fileira[posicao] = null;
        return true;
    }

}