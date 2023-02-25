const product = [
  {
    img: "imeges/images.jpeg",
    price: 19,
    title: "T-shirt",
    discr: "this uniqe products ",
  },
  {
    img: "imeges/images1.jpeg",
    price: 30,
    title: "jackt",
    discr: "this uniqe products ",
  },
  {
    img: "imeges/images2.jpeg",
    price: 40,
    title: "T-shirt",
    discr: "this uniqe products ",
  },
  {
    img: "imeges/14717187_996468597141956_661463977338278352_n.jpg",
    price: 50,
    title: "T-shirt",
    discr: "this uniqe products ",
  },
];
const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { price, img, title, discr } = item;

    return (
      `<div class='box'>
        <div class='box-img'> 
        <img class='images' src=${img}></img>
        </div>
        <div class='bottom'>
            <h4>${title}</h4>
            <p>${discr}</p>
            <h2>${price}.00</h2>
            ` +
      "<button onclick='additem(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
    </div>`
    );
  })
  .join("");

function additem(a) {
  cart.push({ ...categories[a] });
  disblaycart();
}

function delelem(a) {
  cart.splice(a, 1);
  disblaycart();
}

var cart = [];

function disblaycart(a) {
  let j = 0;
  total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartitem").innerHTML = "Your cart is impty";
    document.getElementById("tot").innerHTML = "$" + total + ".00";
  } else {
    document.getElementById("cartitem").innerHTML = cart
      .map((item) => {
        var { img, price, discr, title } = item;
        total = total + price;
        document.getElementById("tot").innerHTML = "$" + total + ".00";

        return (
          `<div class='cart-item'>
            <div class='row-img'>
            <img class=rowimg src=${img}></img>
            </div>
            <h4 style='font-size:12px; padding-top:9px'>${title}</h4>
            <p style='font-size:9px;padding-top:11px'>${discr}</p>
            <h2 style='font-size:14px;'>$ ${price}</h2> 
            ` +
          "<i i class='fa-solid fa-trash' onclick = 'delelem(" +
          j++ +
          ")'></i></div>"
        );
      })

      .join("");
  }
}
let sid = document.getElementById("sd");
let co = document.getElementById("ic");
let c = 0;
co.onclick = function hide() {
  c++;
  sid.style.display = "block";
  if (c === 2) {
    sid.style.display = "none";
    c = 0;
  }
};
