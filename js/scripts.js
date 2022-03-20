function Pizza() {
  let size = document.querySelector('input[name="size"]:checked').value
  let crust = document.querySelector('input[name="crust"]:checked').value
  let toppings = [];
  let checkboxes = document.getElementByName('toppings[]');
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      toppings.push(checkboxes[i].value);
    }
  }

}

// let pizzaTotal = ("size", "crust", "toppings"){
//   let sizes = ("small", "medium", "large");
//   let sizePrice = (300, 500, 700);
//   let crust = ("crispy", "gluten-free", "classic-thin", "classic-thick");
//   let crustPrice = (150, 150, 150, 150);
//   let toppings = ("Sausage and Mushrooms ", "Pepperoni and Bacon",
//   "Ham and Pineapple", "Sausage and Pepper");
//   let toppingsPrice = (150, 150, 150,150,);


// let pizzaTotal = (size + crust + (toppings).checked + (delivery).checked).value;
// return true ;
// alert ("Your total is 'pizzaTotal'");

// }

if (size.value == "large" && crust.value=="crispy" && toppings.value=="Sausage and Mushrooms"){
  let total= 700 + 150 +150;
}





$(document).ready(function () {

}