async function main() {
    const products = await fetch('https://fakestoreapi.com/products');
    const productsData = await products.json();
    const productListEl = document.querySelector(".product-list");

    productListEl.innnerHTML = productsData
    .map(
        (product) => ` <div class="product-card">
        <div class="product-card__container">
            <h3>Product title</h3>
            <p><b>Price:</b>£00.00</p>
            <p><b>Category</b>unisex clothing</p>
            <p><b>Rating:</b>4.5</p>
            <p><b>Count:</b>0000</p>
        </div>
    </div>`
    ).join("");
}



    main();

