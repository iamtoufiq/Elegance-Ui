const hamburger = document.getElementById("hamburger");
const componentList = document.querySelector(".component-list");
const component = document.querySelector(".component");

hamburger.addEventListener("click", () => {
  component.style.display = "none";
  componentList.style.display = "initial";
  console.log(component.style.display);
});

componentList.addEventListener("click", () => {
  if (component.style.display == "none") {
    component.style.display = "block";
    componentList.style.display = "none";
  }
});
