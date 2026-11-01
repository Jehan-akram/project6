let cartContainer = document.getElementById("cart-container")
let badge = document.querySelector(".badge")
let getCart = localStorage.getItem("cartProducts") 

if(getCart){
    let item = JSON.parse(getCart)
    drawproduct(item)
}

function drawproduct(products){
    let y = products.map((product, index) => {
        return `
        <div class="col-12">
            <div class="card p-3 d-flex flex-row align-items-center justify-content-between mb-3">
                <img src="${product.imageUrl}" style="width:80px;">
                <h5>${product.title}</h5>
                <span class="fw-bold">${product.price}</span>
                <button class="btn btn-danger btn-sm" onclick="RemoveFromCart(${index})">Remove</button>
            </div>
        </div>`
    })
    cartContainer.innerHTML = y.join("")
}

function RemoveFromCart(index){
    let products = JSON.parse(localStorage.getItem("cartProducts")) 
    products.splice(index, 1)
    localStorage.setItem("cartProducts", JSON.stringify(products)) 
    location.reload()
}