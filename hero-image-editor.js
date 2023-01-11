const $editImgHero = d.querySelector("#inputImgHero");
const $uploadInput = d.querySelector("#imgUploadInput");

window.addEventListener("load", init, false);
$editImgHero.addEventListener("click", editHeroImage);
$uploadInput.addEventListener("change", editHeroImage, false);
//window.addEventListener("load", editHeroImage);

function editHeroImage(event) {
  $uploadInput.classList.toggle("hideEditBtn");
}

/** change image */
function init() {
  let inputFile = document.getElementById("imgUploadInput");
  inputFile.addEventListener("change", mostrarImagen, false);
}

function mostrarImagen(event) {
  let file = event.target.files[0];
  let reader = new FileReader();
  reader.onload = function (event) {
    let img = document.getElementById("hero-img");
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}
