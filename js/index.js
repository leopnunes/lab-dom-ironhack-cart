// ITERATION 1


//... your code goes here


function updateSubtotal(product) {
  const sub = product.querySelector(".subtotal span")
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  let subtotal = price.innerText * quantity.value

  console.log(subtotal)

  sub.innerText = subtotal

  console.log('Calculating subtotal, yey!');
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  const allProducts = document.querySelectorAll(".product")
  console.log(allProducts)

  for (product of allProducts) {
    updateSubtotal(product)
  }

  // ITERATION 3
  const subtotais = document.querySelectorAll(".subtotal span")
  const totalValue = document.querySelector("#total-value span")

  subtotais.forEach((subtotal) => {
    totalValue.innerText = Number(totalValue.innerText) + Number(subtotal.innerText)
  })
  console.log(subtotais)
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
