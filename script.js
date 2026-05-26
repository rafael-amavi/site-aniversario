const SUPABASE_URL =
  "https://njrcmldbrjqflonrknns.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_UiO1FSoUQNJ5OdshuqaNpQ_IhqTafAL";

const supabase =
  window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  );


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


/* ------------------------- */
/* ELIXIR */
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
  async () => {

    imagemBoa.src =
      "ELIXIR_EMPTY.png";


    setTimeout(async () => {

      const nome =
        prompt("Digite seu nome:");



      await supabase
        .from("confirmacoes")
        .insert([
          {
            nome: nome,
            resposta: "renovou"
          }
        ]);


      resultado.innerHTML =
        "Presença confirmada, " +
        nome +
        " 🎉";

    }, 300);

  }
);


/* ------------------------- */
/* CORAÇÃO */
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

    coracaoTriste.src =
      "HEART_BROKEN.png";

    resultado.innerHTML =
      "A amizade foi oficialmente encerrada 😔";

  }
);