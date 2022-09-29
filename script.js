const element = document.querySelector(".container-scroller");

element.addEventListener("wheel", (event) => {
  element.scrollBy({
    left: event.deltaY < 0 ? -800 : 800,
    behavior: "smooth",
  });
  //console.log(event);
});
