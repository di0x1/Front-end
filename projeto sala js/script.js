
const img          = document.getElementById("main");
const statusBadge  = document.getElementById("statusBadge");
const barraFome    = document.getElementById("barraFome");
const contadorLabel = document.getElementById("contadorLabel");

const estados = {
  normal:  "Diabo.png",
  comendo: "Diabocomendo.png",
  feliz:   "Diabofeliz.png",
  fome30:  "Diabofome.png",
  fome60:  "Diabomorto.png"
};

const fundoDia   = "background.png";
const fundoNoite = "background_noite.png";
let   modoNoite  = false;       


let contador   = 0;   
let morto      = false;

let intervalo    = null;  
let timeClick    = null;  
let timeOut      = null;  

function setStatus(texto, cor) {
  statusBadge.textContent = texto;
  statusBadge.className = `badge badge-lg mb-4 text-base font-semibold badge-${cor}`;
}

function atualizarBarra() {

  const pct = Math.max(0, Math.round((1 - contador / 60) * 100));
  barraFome.value = pct;
  contadorLabel.textContent = `${contador}s`;

  if (pct > 50)       barraFome.className = "progress progress-success w-full";
  else if (pct > 20)  barraFome.className = "progress progress-warning w-full";
  else                barraFome.className = "progress progress-error w-full";
}

function initConta() {
  if (intervalo) clearInterval(intervalo);

  morto = false;
  intervalo = setInterval(() => {
    contador++;
    atualizarBarra();
    console.log("Tempo:", contador);

    if (contador === 30) {
      img.src = estados.fome30;
      setStatus("Com fome! 😤", "warning");
    }
    if (contador >= 60) {
      img.src = estados.fome60;
      setStatus("Morreu 💀", "error");
      morto = true;
      clearInterval(intervalo);   
    }
  }, 1000);
}

function alimentar() {

  if (timeClick) clearTimeout(timeClick);
  if (timeOut)   clearTimeout(timeOut);
  contador = 0;
  atualizarBarra();

  initConta(); 
  img.src = estados.comendo;
  setStatus("Comendo 🍓", "primary");
  console.log("Comendo");

  timeClick = setTimeout(() => {
    img.src = estados.feliz;
    setStatus("Feliz e Satisfeita 😊", "success");

    timeOut = setTimeout(() => {
      img.src = estados.normal;
      setStatus("Normal", "primary");
    }, 2000);
  }, 1000);
}

function alternarFundo() {
  modoNoite = document.getElementById("toggleNoite").checked;
  document.body.style.backgroundImage = modoNoite
    ? `url('${fundoNoite}')`
    : `url('${fundoDia}')`;
}

setStatus("Normal", "primary");
initConta();