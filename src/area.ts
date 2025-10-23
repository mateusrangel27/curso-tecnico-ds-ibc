import { Area } from "./classes/area.js";

window.onload = () => {
  carregarTabela();
};

function carregarTabela() {
  const listaArea = Area.listar();
  const tabela = document.getElementById("tabela-area") as HTMLTableElement;

  tabela.innerHTML = `
    <tr>
      <th>Nome</th>
      <th>E-mail</th>
      <th>Mensagem</th>
      <th>Ações</th>
    </tr>
  `;

  listaArea.forEach((area) => {
    const linha = tabela.insertRow();
    linha.insertCell().textContent = area.nome;
    linha.insertCell().textContent = area.email;
    linha.insertCell().textContent = area.mensagem;

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => {
      excluirArea(area.id);
    });

    linha.insertCell().appendChild(btnExcluir);
  });
}

function excluirArea(id: string) {
  Area.excluir(id);
  carregarTabela();
}