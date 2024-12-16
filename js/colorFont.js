const buttons = {
  secondary: document.getElementById("bg-secondary"),
  primary: document.getElementById("bg-primary"),
  success: document.getElementById("bg-success"),
  danger: document.getElementById("bg-danger"),
  warning: document.getElementById("bg-warning"),
  info: document.getElementById("bg-info"),
  dark: document.getElementById("bg-dark"),
  default: document.getElementById("bg-default"),
  
};

function changeBackgroundColor(colorClass) {
  const bgElements = document.querySelectorAll(".bg-light, .bg-default, .bg-secondary, .bg-primary, .bg-success, .bg-danger, .bg-warning, .bg-info, .bg-dark");

  bgElements.forEach((e) => {
    
    e.classList.remove("bg-light", "bg-default", "bg-secondary", "bg-primary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-dark");


    e.classList.add(colorClass, "bg-opacity-25", "text-dark", "transition");
  });
}


Object.entries(buttons).forEach(([color, button]) => {
  if (button) {
    button.addEventListener("click", () => changeBackgroundColor(`bg-${color}`));
  }
});
