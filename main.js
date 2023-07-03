"use strict";

const form = document.getElementById("form-registro");
const inputNome = document.getElementById("campo-nome");
const inputTel = document.getElementById("campo-tel");
const nomes = [];
const telefones = [];

let linhas = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let msg = document.getElementById("msg");

  addLinha();
  atualizaTabela();
});

const addLinha = function () {
  if (nomes.includes(inputNome.value)) {
    const msgErroNome = `O nome <b>${inputNome.value}</b> já está registrado.`;
    msg.innerHTML = msgErroNome;
  } else if (telefones.includes(inputTel.value)) {
    const msgErroTel = `O telefone <b>${inputTel.value}</b> já está registrado.`;
    msg.innerHTML = msgErroTel;
  } else {
    const msgCerto = `nome: <b>${inputNome.value}</b> e tel: <b>${inputTel.value}</b> registrado com sucesso!`;
    msg.innerHTML = msgCerto;

    nomes.push(inputNome.value);
    telefones.push(inputTel.value);

    let linha = "<tr>";
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTel.value}</td>`;
    linha += "<tr>";

    linhas += linha;
  }
};

const atualizaTabela = function () {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
};
