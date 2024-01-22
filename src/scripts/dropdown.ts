document.querySelector("#dropdown-button")!.addEventListener("click", (e) => {
  const panel: HTMLMenuElement = document.querySelector("#dropdown-panel")!;
  switch (panel.ariaExpanded) {
    case "true":
      panel.style.display = "none";
      panel.ariaExpanded = "false";
      break;
    case "false":
      panel.style.display = "flex";
      panel.ariaExpanded = "true";
      panel.focus();
      break;
  }
  e.stopPropagation();
});

document.addEventListener("click", () => {
    const panel: HTMLMenuElement = document.querySelector("#dropdown-panel")!;
    if (panel.ariaExpanded == "true") {
        panel.style.display = "none";
        panel.ariaExpanded = "false";
    }
});