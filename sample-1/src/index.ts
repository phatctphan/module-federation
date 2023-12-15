import "./index.css";

export function createButton(label: string) {
  const button = document.createElement("button");
  button.classList.add("sample-1-button");
  button.append(label);
  button.onclick = function () {
    alert("Hello World");
  };
  return button;
}
