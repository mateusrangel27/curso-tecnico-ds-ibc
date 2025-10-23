export declare class Area {
    nome: string;
    email: string;
    mensagem: string;
    id: string;
    constructor(nome: string, email: string, mensagem: string);
    cadastrar(): void;
    static listar(): Area[];
    static excluir(id: string): void;
}
//# sourceMappingURL=area.d.ts.map