const allProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => displayAllProducts(json));
};

//products by category
const loadCategory = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((json) => displayAllProducts(json));
};
// Allproducts
const displayAllProducts = (products) => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  for (let product of products) {
    //create element
    console.log(product);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `

         <div class="card bg-base-100 p-4">
         <img src="${product.image}" class="h-40 object-contain mx-auto">
          <h2 class="font-bold text-sm mt-4">${product.title}</h2>
          <p>$${product.price}</p>
          <p class="text-sm">${product.description.slice(0, 60)}</p>
         </div>
         <div class="card-actions justify-between mt-4">
                <button class="btn btn-sm border-gray-200"><i class="fa-regular fa-eye"></i> Details</button>
                <button class="btn btn-primary btn-sm"><i class="fa-solid fa-cart-plus"></i> Add</button>
            </div>

     `;

    //appendcontainer
    productContainer.append(btnDiv);
  }
};
allProducts();
