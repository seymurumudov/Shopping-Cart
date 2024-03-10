// en yuxari hissede varaiblar olur

let basketBtn = document.querySelector(".basket-btn")
let basketProductList = document.querySelector(".basket-product-list")
let basketDropdownMenu = document.querySelector(".basket-dropdown-menu")
let productList = document.getElementById("productList")

let products = [
    {
        image: "/assets/images/product-1.jpg",
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stas ..."
    },
    {
        image: "/assets/images/product-2.png",
        title: "Iphone 15 PRO MAX",
        price: 1400,
        description: "Your perfect pack for everyday use and walks in the forest. Stas ..."
    },
    {
        image: "/assets/images/product-1.jpg",
        title: "Apple Vision Pro",
        price: 3500,
        description: "Your perfect pack for everyday use and walks in the forest. Stas ..."
    },
]

let basketProducts = []

basketBtn.addEventListener("click", function() {
    if (basketDropdownMenu.style.display == "block") {
        basketDropdownMenu.style.display = "none"
        return
    }

    basketDropdownMenu.style.display = "block"
})


function showProductList() {
    products.forEach(function(mehsul, index) {
        productList.innerHTML += `
        <div class="col-3">
            <div class="product-item">

                <div class="product-image">
                    <img src="${mehsul.image}" alt="">
                </div>

                <div class="product-detail">
                    <a href="" class="product-title">
                        ${mehsul.title}
                    </a>

                    <div class="product-rating">
                        <div class="stars">
                            <i class="fa-solid fa-star rated"></i>
                            <i class="fa-solid fa-star rated"></i>
                            <i class="fa-solid fa-star rated"></i>
                            <i class="fa-solid fa-star rated"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <span>(120)</span>
                    </div>

                    <span class="product-price">$${mehsul.price}</span>

                    <p>
                        ${mehsul.description}
                    </p>
                </div>

                <div class="action-btns">
                    <button class="add-to-cart" data-index="${index}">
                        <i class="fa-solid fa-cart-plus"></i>
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
        `
    })

    addToBasket()
}

function addToBasket() {
    let addToBasketBtns = document.querySelectorAll(".add-to-cart")
    
    addToBasketBtns.forEach(function(addToBasketBtn) {
        addToBasketBtn.addEventListener("click", function(ev) {
            let productIndex = ev.target.getAttribute("data-index")
            let productItem  = products[productIndex]

            if(basketProducts.find((item) => item.title == productItem.title)){
                productItem.say += 1
        
            }else{
                basketProducts.push(productItem)
                productItem.say = 1
            }

           
            showBasketItems()
        })
    })
    
}

function showBasketItems() {
    basketProductList.innerHTML = ""
    basketProducts.forEach(function(product) {
        basketProductList.innerHTML += `
            <div class="basket-product-item">
                <div class="product-img">
                    <img src="${product.image}" alt="">
                </div>

                <div class="product-detail">
                    <div class="product-header">
                        <h3 class="product-title">${product.title}</h3>
                        <button class="btn btn-danger btn-xs">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>

                    <span>${product.price}</span>
                
                    <div class="quantity-box">
                        <button class="act-btn decrease-btn">-</button>
                        <input type="text" value="${product.say}">
                        <button class="act-btn increase-btn">+</button>
                    </div>
                </div>
            </div>
        `
    })
}

showProductList()
