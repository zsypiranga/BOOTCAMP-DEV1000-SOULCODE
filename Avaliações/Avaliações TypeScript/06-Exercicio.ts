interface Imprimivel{
    imprimir(): void;
}

interface Exportavel{
    exportarJSON(): string;
}

class Relatorio implements Imprimivel,Exportavel{
    imprimir(): void{
        console.log('Eu sou o método Imprimir');
    }

    exportarJSON(): string{
        return 'Sou método de exportar JSON';
    }
}

const teste = new Relatorio();
teste.imprimir();
console.log(teste.exportarJSON());