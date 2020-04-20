console.log("Theme switcher");

const themeSwitcher = document.getElementById("theme-switch");

themeSwitcher.checked = false;

function clickHandler() {
  if (this.checked) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
}

themeSwitcher.addEventListener("click", clickHandler);
