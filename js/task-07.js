const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  const currentFontSize = fontSizeControl.value;
  text.style.fontSize = currentFontSize + "px";
});
