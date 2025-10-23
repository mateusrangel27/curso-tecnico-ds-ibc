import { Area } from "./classes/area.js";

const formContato = document.getElementById("formContato") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtMensagem = document.getElementById("txtMensagem") as HTMLTextAreaElement;
const btnEnviar = document.getElementById("btnEnviar") as HTMLButtonElement;
const btnLimpar = document.getElementById("btnLimpar") as HTMLButtonElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;

const areas: Area[] = [];

function exibirMensagem(color: string, msg: string) {
  divMensagem.style.color = color;
  divMensagem.textContent = msg;
}

formContato.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = txtNome.value.trim();
  const email = txtEmail.value.trim();
  const mensagem = txtMensagem.value.trim();

  if (!nome || !email || !mensagem) {
    exibirMensagem("red", "Todos os campos são obrigatórios!");
    return;
  }

const area = new Area(nome, email, mensagem);
  area.cadastrar();
  exibirMensagem("green", "Mensagem enviada com sucesso!");
  formContato.reset();
});

btnLimpar.addEventListener("click", (event) => {
  event.preventDefault(); // impede comportamento padrão
  formContato.reset(); // limpa os campos
  divMensagem.textContent = ""; // limpa também a mensagem
});