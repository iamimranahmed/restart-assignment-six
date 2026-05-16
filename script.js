const allProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => displayAllProducts(json));
};

//products by category
const loadCategory = (categoryName) => {
  fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((res) => res.json())
    .then((json) => displayAllProducts(json));
};
//Allproducts
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
        <p class="text-sm">${product.description.slice(0, 80)}...</p>
       </div>
        
   `;

    //appendcontainer
    productContainer.append(btnDiv);
  }
};
allProducts();
