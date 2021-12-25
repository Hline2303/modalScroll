console.log("connecté !");

// Je sélectionne et je stocke la div modal-container
const modal = document.querySelector(".modal-container");
// console.log(modal);
// Je sélectionne le bouton
const btn = document.querySelector(".btn-success");
// console.log(btn);
// Je sélectionne la div code
const code = document.querySelector(".code");
// console.log(code);
// Je sélectionne l'icône
const icone = document.querySelector(".fa-times");
// console.log(icone);

window.addEventListener("scroll", displayModal);

function displayModal() {
  console.log("défilement détecté !");

  let hauteur = document.documentElement.scrollTop;
  console.log(hauteur, "nombre de pixels depuis le haut de la page");

  if (hauteur > 400) {
    console.log("Affichage de la modale !");
    modal.style.display = "flex";
  }
}

btn.addEventListener("click", function () {
  console.log("bouton cliqué");
  // Je rends visible le code
  code.style.display = "block";
  // Je rends le bouton invisible
  btn.style.display = "none";
});

icone.addEventListener("click", function () {
  console.log("icone cliquée !");
  // Je rends invisible la div modal-container
  modal.style.display = "none";
  // J'annule l'évènement
  window.removeEventListener("scroll", displayModal);
});
