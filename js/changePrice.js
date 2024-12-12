const size39 = document.getElementById("size39");
const size40 = document.getElementById("size40");
const size41 = document.getElementById("size41");
const size42 = document.getElementById("size42");
const size43 = document.getElementById("size43");
const priceEl = document.getElementById("price");

const buttonForSize = document.getElementById("buttonForSize");

const buttonForbuy = document.getElementById("buttonForbuy");

buttonForSize.addEventListener("click", () => {
  buttonForbuy.classList.add("bg-success");
  buttonForbuy.classList.add("text-white");
});

size39.addEventListener("click", (event) => {
  buttonForSize.classList.add("btn-dark");
  priceEl.textContent = "$90.00";
  size39.classList.add("btn-dark");
});

size40.addEventListener("click", (event) => {
  buttonForSize.classList.add("btn-dark");
  priceEl.textContent = "$88.00";
  size40.classList.add("btn-dark");
});
size41.addEventListener("click", (event) => {
  buttonForSize.classList.add("btn-dark");
  priceEl.textContent = "$87.00";
  size41.classList.add("btn-dark");
});
size42.addEventListener("click", (event) => {
  buttonForSize.classList.add("btn-dark");
  priceEl.textContent = "$86.00";
  size42.classList.add("btn-dark");
});
size43.addEventListener("click", (event) => {
  buttonForSize.classList.add("btn-dark");
  priceEl.textContent = "$80.00";
  size43.classList.add("btn-dark");
});
