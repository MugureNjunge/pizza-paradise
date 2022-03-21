

function myFunction() {
  let sizePrice = [300, 500, 700];
  let yummy = document.getElementById("topping");
  let pizzaSize = document.getElementById("size");
  let pizzaCrust =document.getElementById("crust");
  let transport= document.getElementById("delivery");
  let yummyPrice =[150, 150, 150, 150];
  let crustPrice = [200,200,200];
  let transport =[200];
 

  // mushrooms

  if (pizzaSize.value=="large" && yummy.value=="mushrooms" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[0] + crustPrice[0]);

  }

  if (pizzaSize.value=="large" && yummy.value=="mushrooms" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[0] + crustPrice[1]);

  }

  if (pizzaSize.value=="large" && yummy.value=="mushrooms" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[0] + crustPrice[2]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="mushrooms" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[0] + crustPrice[0]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="mushrooms" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[0] + crustPrice[1]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="mushrooms" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[0] + crustPrice[2]);

  }

  if (pizzaSize.value=="small" && yummy.value=="mushrooms" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[0] + crustPrice[0]);

  }

  if (pizzaSize.value=="small" && yummy.value=="mushrooms" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[0] + crustPrice[1]);

  }

  if (pizzaSize.value=="small" && yummy.value=="mushrooms" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[0] + crustPrice[2]);

  }

  // pineapple

  if (pizzaSize.value=="large" && yummy.value=="pineapple" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[1] + crustPrice[0]);

  }

  if (pizzaSize.value=="large" && yummy.value=="pineapple" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust" );
  alert(sizePrice[2] + yummyPrice[1] + crustPrice[1]);

  }

  if (pizzaSize.value=="large" && yummy.value=="pineapple" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[1] + crustPrice[2]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="pineapple" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[1] + crustPrice[0]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="pineapple" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[1] + crustPrice[1]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="pineapple" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[1] + crustPrice[2]);

  }

  if (pizzaSize.value=="small" && yummy.value=="pineapple" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[1] + crustPrice[0]);

  }

  if (pizzaSize.value=="small" && yummy.value=="pineapple" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[1] + crustPrice[1]);

  }

  if (pizzaSize.value=="small" && yummy.value=="pineapple" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[1] + crustPrice[2]);

  }

  //  ham
  if (pizzaSize.value=="large" && yummy.value=="ham" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[2] + crustPrice[0]);

  }

  if (pizzaSize.value=="large" && yummy.value=="ham" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[2] + crustPrice[1]);

  }

  if (pizzaSize.value=="large" && yummy.value=="ham" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[2] + crustPrice[2]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="ham" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[2] + crustPrice[0]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="ham" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with  " + yummy.value + " topping and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[2] + crustPrice[1]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="ham" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[2] + crustPrice[2]);

  }

  if (pizzaSize.value=="small" && yummy.value=="ham" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[2] + crustPrice[0]);

  }

  if (pizzaSize.value=="small" && yummy.value=="ham" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[2] + crustPrice[1]);

  }

  if (pizzaSize.value=="small" && yummy.value=="ham" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[2] + crustPrice[2]);

  }

  // pepperoni

  if (pizzaSize.value=="large" && yummy.value=="pepperoni" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust" );
  alert(sizePrice[2] + yummyPrice[3] + crustPrice[0]);

  }

  if (pizzaSize.value=="large" && yummy.value=="pepperoni" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[3] + crustPrice[1]);

  }

  if (pizzaSize.value=="large" && yummy.value=="pepperoni" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[2] + yummyPrice[3] + crustPrice[2]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="pepperoni" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[3] + crustPrice[0]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="pepperoni" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[3] + crustPrice[1]);

  }

  if (pizzaSize.value=="medium" && yummy.value=="pepperoni" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[1] + yummyPrice[3] + crustPrice[2]);

  }

  if (pizzaSize.value=="small" && yummy.value=="pepperoni" && pizzaCrust.value == "crispy"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[3] + crustPrice[0]);

  }

  if (pizzaSize.value=="small" && yummy.value=="ham" && pizzaCrust.value == "gluten-free"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[2] + crustPrice[1]);

  }

  if (pizzaSize.value=="small" && yummy.value=="pepperoni" && pizzaCrust.value == "thick-crust"){
    alert("You placed an order for a " + pizzaSize.value + " pizza with " + yummy.value + " toppings and a " + pizzaCrust.value + " crust. Press ok. to see your total cost!" );
  alert(sizePrice[0] + yummyPrice[3] + crustPrice[2]);

  }


}
 
  

