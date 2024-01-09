let allProducts = 'https://fakestoreapi.com/products'
let productCategories = 'https://fakestoreapi.com/products/categories'
let productJewelery = 'https://fakestoreapi.com/products/category/jewelery'
let productElectronics = 'https://fakestoreapi.com/products/category/electronics'
let productMensClothing = `https://fakestoreapi.com/products/category/men's%20clothing`
let productWomensClothing = `https://fakestoreapi.com/products/category/women's%20clothing`

let product
let productsOutput = document.getElementById('productsOutput')

const apiFetch = (apiLink) => {
    fetch(apiLink)
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
        let productArray = [...data]
        sortFunction(productArray)
        search(productArray)
        productArray.forEach((singleProduct) => {
            showProducts(singleProduct)
        
        })})}

        apiFetch(allProducts)

const showProducts = (singleProduct) =>{
                productsOutput.innerHTML += `
                <div class="productStyle">
                <img src="${singleProduct.image}" alt="${singleProduct.title}">
                <h3>${singleProduct.title}</h3>
                <hr>
                <div><p class="priceStyle">$${singleProduct.price} </p><button class="addToCartBtn">Add to cart</button></div>
                </div>`

        }

const reset = () => {
    productsOutput.innerHTML = ""}

const electronics = () => {
    reset()
    apiFetch(productElectronics)
}

const jewelery = () => {
    reset()
    apiFetch(productJewelery)
}

const mensClothing = () => {
    reset()
    apiFetch(productMensClothing)

}

const womensClothing = () => {
    reset()
    apiFetch(productWomensClothing)
}

const sortFunction = (allProducts) => {
    let sortBy = document.querySelector('#sortby')

    sortBy.addEventListener("change", () => {
        let sortByValue = sortBy.value
        if (sortByValue === "1"){ 
            reset()
        allProducts.sort((a ,b) => {
            return a.price - b.price
        })
        allProducts.forEach((product) => {
            showProducts(product)
        })
        } else if (sortByValue === "2") {
            reset()
            allProducts.sort((a ,b) => {
                return b.price - a.price 
            })
            allProducts.forEach((product) => {
                showProducts(product)
            })
        }
    })
}

const search = (allProducts) =>{
    console.log(allProducts);
    let input = document.querySelector('#input')
    input.addEventListener("input", () => {
        reset()
        inputValue = input.value
        console.log(inputValue);
        let filteredProducts = allProducts.filter(product=> product.title.toLowerCase().includes(inputValue.toLowerCase()))
        console.log(filteredProducts);
        filteredProducts.forEach((product) => {
            showProducts(product)
        })
    })


}






















