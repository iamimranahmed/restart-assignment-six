const allTrendingProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => displayTrendingProducts(json));
};

const displayTrendingProducts = (trendingProducts) => {
  const trending_Products = document.getElementById("trendingProducts");
  trending_Products.innerHTML = "";

  const firstThree = trendingProducts.slice(0, 3);

  for (let trendingProduct of firstThree) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `

         <div class="card bg-base-100 p-4">
         <img src="${trendingProduct.image}" class="h-40 object-contain mx-auto">
          <h2 class="font-bold text-sm mt-4">${trendingProduct.title}</h2>
          <p>$${trendingProduct.price}</p>
          <p class="text-sm">${trendingProduct.description.slice(0, 60)}</p>
         </div>
         <div class="card-actions justify-between mt-4">
                <button class="btn btn-sm border-gray-200"><i class="fa-regular fa-eye"></i> Details</button>
                <button class="btn btn-primary btn-sm"><i class="fa-solid fa-cart-plus"></i> Add</button>
            </div>

     `;
    trending_Products.append(btnDiv);
  }
};
allTrendingProducts();
