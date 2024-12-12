//id name button primary//
const bgPrimaryEl = document.getElementById("bg-primary");
//id name button premary

//id name button secondary//
const bgSecondaryEl = document.getElementById("bg-secondary");
//id name button secondary

//id name button success//
const bgSuccessEl = document.getElementById("bg-success");
//id name button success

//id name button danger//
const bgDangerEl = document.getElementById("bg-danger");
//id name button premary

//id name button warning//
const bgWarningEl = document.getElementById("bg-warning");
//id name button warning

//id name button info//
const bgInfoEl = document.getElementById("bg-info");
//id name button info

//id name button light//
const bgLightEl = document.getElementById("bg-light");
//id name button light

//id name button dark//
const bgDarkEl = document.getElementById("bg-dark");
//id name button dark

//class Name products and footer//
const bgLight = document.querySelectorAll(".bg-light");

// class Name navbar
const transparentNovbar = document.querySelector(".transparent-novbar");
// class Name navbar

// const body = document.querySelector("body");

// press bg-primary

bgLight.forEach((bgLightEl) => {
  bgPrimaryEl.addEventListener("click", (event) => {
    bgLightEl.classList.remove("bg-light");
    bgLightEl.classList.add("bg-primary");
    bgLightEl.classList.add("bg-opacity-25");
    bgLightEl.classList.add("text-dark");
    bgLightEl.classList.add("transition");

    transparentNovbar.classList.remove("bg-light");
    transparentNovbar.classList.add("bg-primary");
    transparentNovbar.classList.add("bg-opacity-25");
    transparentNovbar.classList.add("text-white");
    transparentNovbar.classList.add("transition");
  });
});
// press bg-primary

// press bg-secondary

bgLight.forEach((bgLightEl) => {
  bgSecondaryEl.addEventListener("click", (event) => {
    bgLightEl.classList.remove("bg-light");
    bgLightEl.classList.add("bg-secondary");
    bgLightEl.classList.add("bg-opacity-25");
    bgLightEl.classList.add("text-dark");
    bgLightEl.classList.add("transition");
    transparentNovbar.classList.remove("bg-light");
    transparentNovbar.classList.add("bg-secondary");
    transparentNovbar.classList.add("bg-opacity-25");
    transparentNovbar.classList.add("text-white");
    transparentNovbar.classList.add("transition");
  });
});
// press bg-secondary

// press bg-success

bgLight.forEach((bgLightEl) => {
  bgSuccessEl.addEventListener("click", (event) => {
    bgLightEl.classList.remove("bg-light");
    bgLightEl.classList.add("bg-success");
    bgLightEl.classList.add("bg-opacity-25");
    bgLightEl.classList.add("text-dark");
    bgLightEl.classList.add("transition");
    transparentNovbar.classList.remove("bg-light");
    transparentNovbar.classList.add("bg-success");
    transparentNovbar.classList.add("bg-opacity-25");
    transparentNovbar.classList.add("text-white");
    transparentNovbar.classList.add("transition");
  });
});
// press bg-success

// press bg-danger

bgLight.forEach((bgLightEl) => {
  bgDangerEl.addEventListener("click", (event) => {
    bgLightEl.classList.remove("bg-light");
    bgLightEl.classList.add("bg-danger");
    bgLightEl.classList.add("bg-opacity-25");
    bgLightEl.classList.add("text-dark");
    bgLightEl.classList.add("transition");
    transparentNovbar.classList.remove("bg-light");
    transparentNovbar.classList.add("bg-danger");
    transparentNovbar.classList.add("bg-opacity-25");
    transparentNovbar.classList.add("text-white");
    transparentNovbar.classList.add("transition");
  });
});
// press bg-danger

// press bg-warning

bgLight.forEach((bgLightEl) => {
  bgWarningEl.addEventListener("click", (event) => {
    bgLightEl.classList.remove("bg-light");
    bgLightEl.classList.add("bg-warning");
    bgLightEl.classList.add("bg-opacity-25");
    bgLightEl.classList.add("text-dark");
    bgLightEl.classList.add("transition");
    transparentNovbar.classList.remove("bg-light");
    transparentNovbar.classList.add("bg-warning");
    transparentNovbar.classList.add("bg-opacity-25");
    transparentNovbar.classList.add("text-white");
    transparentNovbar.classList.add("transition");
  });
});
// press bg-warning

// press bg-info

bgLight.forEach((bgLightEl) => {
  bgInfoEl.addEventListener("click", (event) => {
    bgLightEl.classList.remove("bg-light");
    bgLightEl.classList.add("bg-info");
    bgLightEl.classList.add("bg-opacity-25");
    bgLightEl.classList.add("text-dark");
    bgLightEl.classList.add("transition");
    transparentNovbar.classList.remove("bg-light");
    transparentNovbar.classList.add("bg-info");
    transparentNovbar.classList.add("bg-opacity-25");
    transparentNovbar.classList.add("text-white");
    transparentNovbar.classList.add("transition");
  });
});
// press bg-info

// press bg-light

bgLight.forEach((bgLightEl) => {
  bgLightEl.addEventListener("click", (event) => {
    bgLightEl.classList.remove("bg-light");
    bgLightEl.classList.add("bg-primary");
    bgLightEl.classList.add("bg-opacity-25");
    bgLightEl.classList.add("text-dark");
    bgLightEl.classList.add("transition");
    transparentNovbar.classList.remove("bg-light");
    transparentNovbar.classList.add("bg-light");
    transparentNovbar.classList.add("bg-opacity-25");
    transparentNovbar.classList.add("text-white");
    transparentNovbar.classList.add("transition");
  });
});
// press bg-light

// press bg-dark

bgLight.forEach((bgLightEl) => {
  bgDarkEl.addEventListener("click", (event) => {
    bgLightEl.classList.remove("bg-light");
    bgLightEl.classList.add("bg-dark");
    bgLightEl.classList.add("bg-opacity-25");
    bgLightEl.classList.add("text-dark");
    bgLightEl.classList.add("transition");
    transparentNovbar.classList.remove("bg-light");
    transparentNovbar.classList.add("bg-dark");
    transparentNovbar.classList.add("bg-opacity-25");
    transparentNovbar.classList.add("text-white");
    transparentNovbar.classList.add("transition");
  });
});
// press bg-dark
