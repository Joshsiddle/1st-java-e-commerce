const url = `https://fakestoreapi.com/products`
fetch(url)
    .then(response => response.json())
    .then(data => displayProduct(data))

const displayProduct = products => {
    for (product of products) {
        const displayProduct = document.getElementById('display-product');
        const div = document.createElement('div');
        div.innerHTML = `
    <div id="products-div">
        <div>
            <img src="${product.image}" alt="">
        </div>
        <div>
              <h5 id="product-title">${product.title}</h5>
              <h2 id="product-price">$${product.price}</h2>
              <b class="rating">${product.rating.rate}⭐</b>
              <p id="description">${product.description}</p>
        </div>
    </div>
        `
        displayProduct.appendChild(div);
    }
}