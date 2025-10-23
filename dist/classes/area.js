export class Area {
    constructor(nome, email, mensagem) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }
    cadastrar() {
        // Recupera a lista de áreas armazenada no localStorage
        const listaArea = JSON.parse(localStorage.getItem("listaArea") || "[]");
        // Adiciona a área atual à lista
        listaArea.push(this);
        // Salva a lista atualizada no localStorage
        localStorage.setItem("listaArea", JSON.stringify(listaArea));
    }
    static listar() {
        const listaArea = JSON.parse(localStorage.getItem("listaArea") || "[]");
        return listaArea;
    }
    static excluir(id) {
        let listaArea = JSON.parse(localStorage.getItem("listaArea") || "[]");
        listaArea = listaArea.filter((area) => area.id !== id);
        localStorage.setItem("listaArea", JSON.stringify(listaArea));
    }
}
//# sourceMappingURL=area.js.map