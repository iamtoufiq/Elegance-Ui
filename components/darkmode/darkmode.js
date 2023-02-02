// dark mode switch
const darkMode = document.querySelectorAll(".dark-mode");
if (localStorage.getItem("darkMode") === null) {
  localStorage.setItem("darkMode", "false");
}
const checkStatus = () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-theme");
  }
};

const changeStatus = () => {
  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", false);
    document.body.classList.toggle("dark-theme");
  } else {
    localStorage.setItem("darkMode", "true");
    document.body.classList.toggle("dark-theme");
  }
};

checkStatus();

darkMode.forEach((item) =>
  item.addEventListener("click", () => {
    changeStatus();
  })
);
