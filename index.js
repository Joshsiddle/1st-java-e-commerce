

async function main() {
    const products = await fetch('https://fakestoreapi.com/products');
    const productsData = await products.json();
    const productListEL = document.querySelector(".product-list");

    productListEL.innerHTML = productsData.map((product) => ` <div class="product-card">
    <div class="product-card__container">
        <img class="product__img" src=${product.image}>
        <div class="product__info--wrapper">
            <h3>${product.title}</h3>
            <p><b>£${product.price.toFixed(2)}</b></p>
            <p><b>${product.category}</b></p>
            <p><b>${ratingsHTML(product.rating.rate)}</b></p>
        </div>
    </div>
</div>`).join("");
}

function ratingsHTML(rate) {
    let ratingHTML = '';

    for (let i = 0; i < Math.floor(rate); ++i) {
        ratingHTML += '<i class="fas fa-star"></i>\n';
    }

    if (!Number.isInteger(rate)) {
        ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
    }
    return ratingHTML;
}

function filterBooks(event) {
    renderBooks(event.target.value);
}


main();

