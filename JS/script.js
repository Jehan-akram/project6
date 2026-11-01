
if (!localStorage.getItem("loggedInUser")) {
    window.location = "register.html";
}
let allproducts = document.getElementById("allproducts")
let products =[
    {id:1 , title:"Lenovo ThinkPad" , p:"Lenovo ThinkPad T480 Core i5-8250U 16Gb RAM 512GB SSD FHD Windows 11 Laptop", price:"$999" , imageUrl:"images/laptop1.png"},
    {id:2 , title:"HP EliteBook" , p:"Powerful performance for work, study, and everyday tasks.", price:"$799" , imageUrl:"images/laptop2.png"},
    {id:3 , title:"ASUS Zenbook" , p:"Sleek design with fast performance for multitasking.", price:"$1236" , imageUrl:"images/laptop3.png"},
    {id:4 , title:"MacBook Air" , p:"Lightweight design with smooth performance and long battery life.", price:"$2000" , imageUrl:"images/laptop4.png"},
    {id:5 , title:"Microsoft Surface" , p:"Premium design with a sharp display for work and productivity.", price:"$8500" , imageUrl:"images/laptop5.png"},
    {id:6 , title:"Dell Inspiron" , p:"Reliable performance for work, study, and everyday multitasking.", price:"$699" , imageUrl:"images/laptop6.png"},
    {id:7 , title:"Acer Aspire" , p:"A stylish and affordable laptop for productivity and daily use.", price:"$599" , imageUrl:"images/laptop7.png"},
    {id:8 , title:"Samsung Galaxy Book" , p:"Slim and lightweight design with smooth performance for work and entertainment.", price:"$899" , imageUrl:"images/laptop8.png"},
    {id:9 , title:"Huawei MateBook" , p:"Elegant design with fast performance, perfect for business and study.", price:"$849" , imageUrl:"images/laptop9.png"},
    {id:10 , title:"LG Gram" , p:"Ultra-lightweight laptop with a large display and excellent productivity features.", price:"$1099" , imageUrl:"images/laptop10.png"},
]
function drowProduct(){
    let y =products.map((item) =>{
       return`<div class=" col-12 col-md-6 col-lg-4 ">
            <div class="card product-item h-100">
                <img src="${item.imageUrl}" class="card-img-top" alt="">
                <div class="card-body">
                    <h4 class="card-title">${item.title}</h4>
                    <p class="card-text">${item.p}</p>
                    <p class="card-text fw-bold">${item.price}</p>
                    <button class="btn btn-dark" onclick ="addToCart(${item.id})">Add To Cart</button>
                </div>
            </div>
        </div>`
    })
    allproducts.innerHTML = y .join("")
}
drowProduct()
function check(){
    if(localStorage.getItem("username")){
        window.location = "cartProducts.html"
    }else{
        window.location = "login.html"
    }
}

let cart = document.querySelector(".cart")
let badge = document.querySelector(".badge")
let addedItems = JSON.parse(localStorage.getItem("cartProducts")) || [];

if (addedItems.length > 0) {
    badge.style.display = "block";
    badge.innerHTML = addedItems.length;
} else {
    badge.style.display = "none";
}

function addToCart(id){
    let chooseItem = products.find((item)=> item.id === id)
    addedItems.push(chooseItem)
    localStorage.setItem("cartProducts", JSON.stringify(addedItems))
    badge.style.display = "block";
    badge.innerHTML = addedItems.length;
}
