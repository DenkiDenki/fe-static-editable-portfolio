const d = document;
const $element = d.querySelector(".container-scroller");

$element.addEventListener("wheel", (event) => {
  $element.scrollBy({
    left: event.deltaY < 0 ? -800 : 800,
    behavior: "smooth",
  });
  //console.log(event);
});
/*********** */
const $editButton = d.querySelector("#edit-btn");

//visualizar el botón editButton y el input de texto
//tomar el input de texto, hacerlo visible y permitir editarlo
// guardar ese texto en el title
//volver a ocultar el botón
function editContent() {
  d.getElementById("edit-title").style.display = "block";
  let heroTitle = d.getElementById("hero-title").innerText;
  console.log(heroTitle);
}

function setHeroTitle(valor) {
  d.getElementById("hero-title").innerText = valor;
}

function logMessage(message) {
  console.log(message + "<br>");
}

//controla si se presiona enter
let textarea = d.getElementById("edit-title");
textarea.addEventListener("keyup", (e) => {
  logMessage(`Key "${e.key}" released [event: keyup]`);

  if (e.key == "Enter") {
    d.getElementById("edit-title").style.display = "none";
  }
});

$editButton.addEventListener("click", editContent);

/* input type file */
function showFile(input) {
  let file = input.files[0];
  /*alert(`File Name: ${file.name}`); // eg. my.png
  alert(`Last Modified: ${file.lastModified}`); // eg.1661401174595*/

  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    console.log(reader.result);
    document.getElementById("about-text").innerText = reader.result;
  };
  reader.onerror = function () {
    console.log(reader.error);
  };
}
