function createProductComponent(product) {
      return (
      `<div class="production-container">
      <img class="production-image" src="data:image/png;base64,${product.image}" alt="${product.name}">
      <span class="production-sale"><p>${product.discount ? `-${product.discount}%` : `${product.tag}`}</p></span>
      
      <h3 class="production-name">${product.name}</h3>
      <p class="production-description">${product.short_desc}</p>
      <h4 class="production-price">${product.unit_price} ${formatPrice(product.price)}</h4>
      ${product.discount ? `<p class="production-old-price"><del>${product.unit_price} ${formatPrice(truncatePrice(Math.floor(product.price / (100 - product.discount) * 100)))}</del></p>` : ""}
      <div class="hidden-info">
          <button>Add to cart</button>
          <p class="action-share"><span class="material-symbols-outlined icon-filled">share</span>Share</p>
          <p class="action-compare"><span class="material-symbols-outlined">swap_horiz</span>Compare</p>
          <p class="action-compare"><span class="material-symbols-outlined">favorite</span>Like</p>         
      </div>
      </div>`
    )
  }

let fetched = false;
let resp = null;
async function populateProduct() {
  if (fetched == true){
    var sth = JSON.parse(sessionStorage.getItem("products"));
    return sth;
  }
  resp = await fetch("https://dummyapi-0uzr.onrender.com/products");
  let prod = await resp.json();
  prod = prod.product_list;
  console.log(prod);
  const container = getElementById ("product-container");
    
  prod.forEach((product) => {
    const producthtml = createProductComponent(product);
    container.insertAdjacentHTML("beforeend",producthtml);
    var b = JSON.stringify(prod);
    sessionStorage.setItem("product_list",b);
  });
}

populateProduct();
