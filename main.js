let cart_open = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
cart_open.addEventListener("click",()=>{
    cart.classList.toggle("active")
});
let cart_close = document.querySelector(".close_cart");
cart_close.addEventListener("click",()=>{
    cart.classList.toggle("active")
});
let back_to_top = document.querySelector(".back");
back_to_top.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
});
/* add itmes in cart */
var all_product_json;
var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];
function addToCart(id , btn){
    product_cart.push(all_product_json[id]);
    btn.classList.add("active")
    getCartItems()
};
let cart_counter = document.querySelector(".cart-count");
let price_cart_head = document.querySelector(".price-cart-head");
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price_cart_total");
function getCartItems(){
    let total_price = 0;
    let items_c = "";
    for(let i = 0; i < product_cart.length; i++){
        items_c += `
                    <div class="item_cart">
                <img src="${product_cart[i].img}">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick ="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash"></i></button>
            </div>
        `
        total_price += product_cart[i].price;
    }
    items_in_cart.innerHTML = items_c;
    price_cart_head.innerHTML ="$"+ total_price;
    cart_counter.innerHTML = product_cart.length;
    count_item_cart.innerHTML = `(${product_cart.length} Item in Cart)`;
    price_cart_total.innerHTML = "$"+ total_price;
}
function remove_from_cart(index) {
    product_cart.splice(index, 1)
    getCartItems()

    let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].classList.remove("active")
        
        product_cart.forEach(product =>{
            if(product.id == i){
                addToCartButtons[i].classList.add("active")
            }
        })
    }
}
let bigImg = document.getElementById("big_img");
function changeImg(img){
    bigImg.src = img
}