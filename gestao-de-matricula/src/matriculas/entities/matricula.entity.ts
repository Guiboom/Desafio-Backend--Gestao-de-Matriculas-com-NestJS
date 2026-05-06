export class Matricula {
    id: number;
    codigo_matricula: string;
    nome_completo: string;
    acompanhamento: string;
    situacao: string;

    // Define o valor padrão "Cursando" no momento da criação do objeto
    constructor() {
        this.situacao = 'Cursando';
    }
}