document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document
  .querySelector("#layout-sim")
  .addEventListener("change", atualizarPreco);
document
  .querySelector("#layout-nao")
  .addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", () => {
  const prazo = document.querySelector("#prazo").value;
  document.querySelector(
    "label[for=prazo]"
  ).innerHTML = `Prazo: ${prazo} semanas`;
  atualizarPreco();
});

function atualizarPreco() {
  const qtde = document.querySelector("#qtde").value;
  const temjs = document.querySelector("#js").checked;
  const comLayout = document.querySelector("#layout-sim").checked;
  const prazo = document.querySelector("#prazo").value;

  let preco = qtde * 200;
  temjs ? (preco *= 1.1) : null;
  comLayout ? (preco += 500) : null;
  let taxaDeUrgencia = 1 - prazo * 0.1;
  preco *= 1 + taxaDeUrgencia;
  document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}
