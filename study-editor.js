const $editTitleBtn = d.querySelector("#edit-role-title-btn");

function editContenta() {
  d.getElementById("edit-role-title").style.display = "block";
  let roleTitle = d.getElementById("role-title").innerText;
  console.log(roleTitle);
}

function setAboutmeTitle(valor) {
  d.getElementById("role-title").innerText = valor;
}

//controla si se presiona enter
let texttitle = d.getElementById("edit-role-title");
texttitle.addEventListener("keyup", (e) => {
  //logMessage(`Key "${e.key}" released [event: keyup]`);

  if (e.key == "Enter") {
    d.getElementById("edit-role-title").style.display = "none";
  }
});
//listener
$editTitleBtn.addEventListener("click", editContenta);
