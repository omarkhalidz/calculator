let display = document.querySelector(".display input");

function displayRes() {
  try {
    if (display.value === undefined || display.value === "") {
      display.value = "Enter a value";
      setTimeout(() => {
        display.value = "";
      }, 1500);
      return;
    }
    display.value = eval(display.value);
  } catch (error) {
    display.value = " invalid equation";
    setTimeout(() => {
      display.value = "";
    }, 1500);
  }
}
