export class Area {
  public id: string;

  constructor(
    public nome: string,
    public email: string,
    public mensagem: string
  ) {
    this.id = crypto.randomUUID();
    this.nome = nome;
    this.email = email;
    this.mensagem = mensagem;
  }

  cadastrar(): void {
    // Recupera a lista de áreas armazenada no localStorage
    const listaArea: Area[] = JSON.parse(localStorage.getItem("listaArea") || "[]");
    // Adiciona a área atual à lista
    listaArea.push(this);
    // Salva a lista atualizada no localStorage
    localStorage.setItem("listaArea", JSON.stringify(listaArea));
  }

  static listar(): Area[] {
    const listaArea: Area[] = JSON.parse(localStorage.getItem("listaArea") || "[]");
    return listaArea;
  }

  static excluir(id: string): void {
    let listaArea: Area[] = JSON.parse(localStorage.getItem("listaArea") || "[]");
    listaArea = listaArea.filter((area: Area) => area.id !== id);
    localStorage.setItem("listaArea", JSON.stringify(listaArea));
  }
}