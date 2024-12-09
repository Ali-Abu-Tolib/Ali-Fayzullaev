// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()







const textCardShoes = document.getElementById("textCardShoes");

const buttonForClothes = document.getElementById("buttonForClothes");

const textCardClothes = document.getElementById("textCardClothes");

const textEmptyTotal = document.getElementById("textEmpty");

const textCardTotal = document.getElementById("textCard");

const textYourProdut = document.getElementById("textYourProdut");

const buttonForShoes = document.getElementById("buttonForShoes");

const buyButtonParent = document.getElementById("buyButtonParent");

const myTishort = document.getElementById("myTishort");

const totalYourProduct = document.getElementById("totalYourProduct");



const piecesTishort = document.getElementById("piecesTishort");
const piecesShoes = document.getElementById("piecesShoes");
const piecesClothes = document.getElementById("piecesClothes");

let total = 0;

let piecesTishortEl = 0;
let piecesShoesEl = 0;
let piecesClothesEl = 0;



myTishort.addEventListener("click", () => {
  textEmptyTotal.textContent = "Your Shopping Cart";
  let newElForTotal = document.createElement("div");
  let newElForTotalImg = document.createElement("img");
  
  newElForTotalImg.classList.add("img-fluid");
  newElForTotalImg.setAttribute("src", "/img/onlineStore1.webp");
  newElForTotalImg.style.width = "200px";
  newElForTotalImg.classList.add("bg-light")
  newElForTotalImg.classList.add("rounded-4")
  newElForTotalImg.classList.add("my-1")
  newElForTotal.classList.add("text-dark");
  newElForTotal.classList.add("p-1")
  newElForTotal.classList.add("bg-light")
  newElForTotal.style.width = "200px";
  newElForTotal.classList.add("fw-medium")
  
  newElForTotal.classList.add("text-center")
  newElForTotal.classList.add("rounded-3")
  let price = 20;
  newElForTotal.textContent = `$ ${price}.00`;
  total += (price); 
  totalYourProduct.textContent = `Total: $ ${total}.00`;
 
  piecesTishortEl += 1;
  piecesTishort.textContent = (piecesTishortEl);


  let deleteEl = document.createElement("p"); //<i class="bi bi-trash-fill"></i>
  deleteEl.classList.add("text-danger");
  deleteEl.textContent = "Delete";
  deleteEl.classList.add("text-center")
  deleteEl.classList.add("pointer")
  deleteEl.classList.add("rounded-3")




  deleteEl.addEventListener("click", () => {
    total -= (price)
    newElForTotalImg.remove();
    newElForTotal.remove();
    deleteEl.remove();
    totalYourProduct.textContent = `Total: $ ${total}.00`;
    piecesTishort.textContent= piecesTishortEl -= 1;
  })
  
  textYourProdut.textContent = "Your Products";
  textCardTotal.appendChild(newElForTotalImg);
  textCardTotal.appendChild(newElForTotal);
  textCardTotal.appendChild(deleteEl);
  

})

buttonForShoes.addEventListener("click", () => {
 
  textEmptyTotal.textContent = "Your Shopping Cart";
  let newElForTotal = document.createElement("div");
  let newElForTotalImg = document.createElement("img");
  newElForTotalImg.classList.add("img-fluid");
  newElForTotalImg.setAttribute("src", "/img/dash.webp");
  newElForTotalImg.style.width = "200px";
  newElForTotalImg.classList.add("bg-light")
  newElForTotalImg.classList.add("rounded-4")
  newElForTotalImg.classList.add("my-1")
  newElForTotal.classList.add("text-dark");
  newElForTotal.classList.add("p-1")
  newElForTotal.classList.add("bg-light")
  newElForTotal.style.width = "200px";
  newElForTotal.classList.add("fw-medium")
  let price = 46;
  newElForTotal.textContent = `$ ${price}.00`;
  total += (price); 
  totalYourProduct.textContent = `Total: $ ${total}.00`;
  newElForTotal.classList.add("text-center")
  newElForTotal.classList.add("rounded-3")
  let deleteEl = document.createElement("p"); //<i class="bi bi-trash-fill"></i>
  deleteEl.classList.add("text-danger");
  deleteEl.textContent = "Delete";
  deleteEl.classList.add("text-center")

  piecesShoesEl += 1;
  piecesShoes.textContent = (piecesShoesEl);

  deleteEl.classList.add("pointer")
  deleteEl.classList.add("rounded-3")
  deleteEl.addEventListener("click", () => {
    total -= (price);
    newElForTotalImg.remove();
    newElForTotal.remove();
    deleteEl.remove();
    totalYourProduct.textContent = `Total: $ ${total}.00`;
    piecesShoes.textContent= piecesShoesEl -= 1;
  })
  
  textYourProdut.textContent = "Your Products";
  textCardShoes.appendChild(newElForTotalImg);
  textCardShoes.appendChild(newElForTotal);
  textCardShoes.appendChild(deleteEl)
  

})





buttonForClothes.addEventListener("click", () => {
  textEmptyTotal.textContent = "Your Shopping Cart";
  let newElForTotal = document.createElement("div");
  let newElForTotalImg = document.createElement("img");
  newElForTotalImg.classList.add("img-fluid");
  newElForTotalImg.setAttribute("src", "/img/pageTwo1.webp");
  newElForTotalImg.style.width = "200px";
  newElForTotalImg.classList.add("bg-light")
  newElForTotalImg.classList.add("rounded-4")
  newElForTotalImg.classList.add("my-1")


  newElForTotal.classList.add("text-dark");
  newElForTotal.classList.add("p-1")
  newElForTotal.classList.add("bg-light")
  newElForTotal.style.width = "200px";
  newElForTotal.classList.add("fw-medium")
  let price = 38;
  newElForTotal.textContent = `$ ${price}.00`;
   total += (price); 
  totalYourProduct.textContent = `Total: $ ${total}.00`;
  newElForTotal.classList.add("text-center")
  piecesClothesEl += 1;
  piecesClothes.textContent = (piecesClothesEl);

  newElForTotal.classList.add("rounded-3")
  let deleteEl = document.createElement("p"); //<i class="bi bi-trash-fill"></i>
  deleteEl.classList.add("text-danger");
  deleteEl.textContent = "Delete";
  deleteEl.classList.add("text-center")
  deleteEl.classList.add("pointer")
  deleteEl.classList.add("rounded-3")

  deleteEl.addEventListener("click", () => {
    total -= (price)
    newElForTotalImg.remove();
    newElForTotal.remove();
    deleteEl.remove();
    totalYourProduct.textContent = `Total: $ ${total}.00`;
    piecesClothes.textContent= piecesClothesEl -= 1;

  })
  
  textYourProdut.textContent = "Your Products";
  textCardClothes.appendChild(newElForTotalImg);
  textCardClothes.appendChild(newElForTotal);
  textCardClothes.appendChild(deleteEl);


})


 
 


