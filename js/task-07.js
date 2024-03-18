const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
const initialSize = (textSpan.style.fontSize = fontSizeControl.value + "px");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";

  textSpan.style.fontSize = fontSize;
});
