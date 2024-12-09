//navbar
const toggleButton = document.getElementById('toggleButton');
const navbarLinks = document.getElementById('navbarLinks');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

//form validation
function formValidation(event) {
  event.preventDefault();

  let userName = document.getElementById("userName");
  let number = document.getElementById("number");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  let usernameError = document.getElementById("usernameError");
  let numberError = document.getElementById("numberError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  let isValid = true;
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let successMessage = document.getElementById("successMessage");

  if (userName.value.trim() == "") {
    usernameError.innerHTML = "First Name is valid";
    isValid = false;
  } else if (userName.value.legth < 5) {
    usernameError.innerHTML = "First Name length greater than 5";
  }

  if (number.value.trim() == "") {
    numberError.innerHTML = "First Number is Valid";
  } else if (number.value.length != 10) {
    numberError.innerHTML = "Number length greater than 10";
    isValid == false;
  } else if (number.value.length > 10) {
    numberError.innerHTML = "Number length less than 10";
    isValid == false;
  }

  if (!email.value.match(regex)) {
    emailError.innerHTML = "Email is not Valid";
  }
  if (password.value != userpass.value) {
    passwordError.innerHTML = "Password and confirm Password must be equl";
    isValid == false;
  }

  if (isValid) {
    successMessage.innerHTML = "Form Submitted Successfuly!!";
  }
}

//images scroll

let images1 = document.getElementById("img1");
let images2 = document.getElementById("img2");
let images3 = document.getElementById("img3");
let images4 = document.getElementById("img4");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 700) {
    images1.src = "img/home/1.jpg";
    images1.style.transition = "0.5s";
  } else {
    images1.src = "img/home/gallery-09.jpg.webp";
  }

  if (scrollPosition > 700) {
    images2.src = "img/home/2.jpg";
  } else {
    images2.src = "img/home/gallery-13.jpg.webp";
  }

  if (scrollPosition > 700) {
    images3.src = "img/home/3.jpg";
  } else {
    images3.src = "img/home/gallery-15.jpg.webp";
  }
  if (scrollPosition > 700) {
    images4.src = "img/home/4.jpg";
  } else {
    images4.src = "img/home/gallery-07.jpg.webp";
  }
});


//model 
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModel1")

var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1")

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
btn1.onclick = function (){
  modal1.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if(event.target.display == modal1){
    modal.style.display = "none";
  }
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// swap values
let firstDestination = document.getElementById("first");
let secondDestination = document.getElementById("second");

function swapValues() {
  let temp;

  temp = firstDestination.innerHTML;
  firstDestination.innerHTML = secondDestination.innerHTML;
  secondDestination.innerHTML = temp;
}


// add to cart
let cart = [];

function addToCart(productName, price) {
  const productIndex = cart.findIndex((item) => item.name === productName);

  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  displayCart();
}

function removeFromCart(productName) {
  cart = cart.filter((item) => item.name !== productName);
  displayCart();
}

function updateQuantity(productName, quantity) {
  const product = cart.find((item) => item.name === productName);
  if (product) {
    product.quantity = parseInt(quantity, 10);
    if (product.quantity <= 0) {
      removeFromCart(productName);
    } else {
      displayCart();
    }
  }
}

function displayCart() {
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = ""; // Clear cart display

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p class="text-center">Your cart is empty.</p>';
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.className = "row mb-3 align-items-center";
    cartItem.innerHTML = `
            <div class="col-md-4"><strong>${item.name}</strong></div>
            <div class="col-md-2">$${item.price.toFixed(2)}</div>
            <div class="col-md-2">
                <input type="number" class="form-control" min="1" value="${
                  item.quantity
                }" onchange="updateQuantity('${item.name}', this.value)">
            </div>
            <div class="col-md-2">
                <button class="btn btn-danger" onclick="removeFromCart('${
                  item.name
                }')">Remove</button>
            </div>
        `;
    cartContainer.appendChild(cartItem);
  });

  const totalPrice = document.createElement("div");
  totalPrice.className = "text-center mt-4";
  totalPrice.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
  cartContainer.appendChild(totalPrice);
}

//card scroll bg change

let card = document.getElementById('cardScroll')
let card1 = document.getElementById('cardScroll1')
let card2 = document.getElementById('cardScroll2')

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  if(scrollPosition > 1000){
    card.style.backgroundColor = 'lightcoral'
  }
  else{
    card.style.backgroundColor = 'white'
  }

  if(scrollPosition > 1000){
    card1.style.backgroundColor = 'lightgreen'
  }
  else{
    card1.style.backgroundColor = 'white'
  }

  if(scrollPosition > 1000){
    card2.style.backgroundColor = 'lightgoldenrodyellow'
  }
  else{
    card2.style.backgroundColor = 'white'
  }
})
//faq
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//sweetalert
function accordian(){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your Products has been Add to Cart",
    showConfirmButton: false,
    timer: 1500
  });
}

function addCart1(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Products has been Add to Cart",
      showConfirmButton: false,
      timer: 1500
    });
  }

  var myCarousel = document.querySelector('#cardCarousel');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000, // Slide every 3 seconds
    wrap: true
  });
  
