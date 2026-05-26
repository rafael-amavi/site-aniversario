const imagemBoa =
  document.getElementById("imagemBoa");

const coracaoTriste =
  document.getElementById("coracaoTriste");

const btnVou =
  document.getElementById("btnVou");

const btnFim =
  document.getElementById("btnFim");

const resultado =
  document.getElementById("resultado");

let elixirUsado = false;
let coracaoQuebrado = false;


/* ------------------------- */
/* ANIMAÇÃO ELIXIR */
/* ------------------------- */

function aumentarElixir() {

  imagemBoa.classList.add("animar");

}

function diminuirElixir() {

  imagemBoa.classList.remove("animar");

}


/* Hover na imagem */

imagemBoa.addEventListener(
  "mouseenter",
  aumentarElixir
);

imagemBoa.addEventListener(
  "mouseleave",
  diminuirElixir
);


/* Hover no botão */

btnVou.addEventListener(
  "mouseenter",
  aumentarElixir
);

btnVou.addEventListener(
  "mouseleave",
  diminuirElixir
);


/* Clique */

btnVou.addEventListener(
  "click",
  () => {

    elixirUsado = true;

    imagemBoa.src =
      "ELIXIR_EMPTY.png";


    setTimeout(() => {

      const nome =
        prompt("Digite seu nome:");

      resultado.innerHTML =
        "Presença confirmada, " +
        nome +
        " 🎉";

    }, 300);

  }
);


/* ------------------------- */
/* ANIMAÇÃO CORAÇÃO */
/* ------------------------- */

function aumentarCoracao() {

  coracaoTriste.classList.add("animar");

}

function diminuirCoracao() {

  coracaoTriste.classList.remove("animar");

}


/* Hover na imagem */

coracaoTriste.addEventListener(
  "mouseenter",
  aumentarCoracao
);

coracaoTriste.addEventListener(
  "mouseleave",
  diminuirCoracao
);


/* Hover no botão */

btnFim.addEventListener(
  "mouseenter",
  aumentarCoracao
);

btnFim.addEventListener(
  "mouseleave",
  diminuirCoracao
);


/* Clique */

btnFim.addEventListener(
  "click",
  () => {

    coracaoQuebrado = true;

    coracaoTriste.src =
      "HEART_BROKEN.png";

    resultado.innerHTML =
      "A amizade foi oficialmente encerrada 😔";

  }
);