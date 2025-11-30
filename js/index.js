



document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll("#nav-links a, #mobile-links a");

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("text-green-500");
    } else {
      link.classList.remove("text-green-500");
    }
  });

  // ✅ Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburger = document.getElementById("hamburger");
  const closeIcon = document.getElementById("close");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });
});




{
  // 12 Product data

  const products = [
    { img: "/images/card-img-1.png", title: "Soilboy Modular Plant Stand - Ivory", price: "SGD 98.00" },
    { img: "/images/card-img-2.png", title: "Soilboy Modular Plant Trolley", price: "SGD 118.00" },
    { img: "/images/card-img-3.png", title: "Soilboy Modular Plant Stand - Black", price: "from SGD 78.00" },
    { img: "/images/card-img-4.png", title: "Minimalist Ceramic Pot", price: "SGD 45.00" },
    { img: "/images/card-img-5.png", title: "Indoor Hanging Planter", price: "SGD 65.00" },
    { img: "/images/card-img-6.png", title: "Eco-friendly Terracotta Pot", price: "SGD 55.00" },
    { img: "/images/card-img-7.png", title: "Glass Vase with Wooden Base", price: "SGD 70.00" },
    { img: "/images/card-img-8.png", title: "Concrete Succulent Pot", price: "SGD 35.00" },
    { img: "/images/card-img-9.png", title: "Cactus Collection Planters", price: "SGD 80.00" },
    { img: "/images/card-img-10.png", title: "Round Bamboo Plant Stand", price: "SGD 90.00" },
    { img: "/images/card-img-11.png", title: "Modern Ceramic Pot Set", price: "SGD 110.00" },
    { img: "/images/card-img-12.png", title: "Marble Finish Indoor Pot", price: "SGD 130.00" },
  ];

  // Get the grid container
  const grid = document.getElementById("product-grid");

  // Loop through products and create each card
  products.forEach((item) => {
    const card = document.createElement("div");
    card.className = "cursor-pointer";

    card.innerHTML = `
      <div class="relative w-full h-[550px] overflow-hidden">
        <img src="${item.img}" alt="${item.title}" 
             class="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110" />
      </div>
      <div class="mt-5 text-center">
        <h3 class="text-lg font-semibold text-gray-800">${item.title}</h3>
        <p class="text-green-700 font-medium">${item.price}</p>
      </div>
    `;

    grid.appendChild(card);
  });

}





{
  // Product data
  const products = [
    { img: "/images/lifestyle-img-1.png", title: "Soilboy Modular Plant Stand - Ivory", price: "SGD 98.00" },
    { img: "/images/lifestyle-img-2.png", title: "Soilboy Modular Plant Trolley", price: "SGD 118.00" },
    { img: "/images/lifestyle-img-3.png", title: "Soilboy Modular Plant Stand - Black", price: "from SGD 78.00" },
  ];

  // Get the grid container
  const grid = document.getElementById("product-grid1");

  // Loop through products and add them to grid
  products.forEach((item) => {
    const card = document.createElement("div");
    card.className = "cursor-pointer";

    card.innerHTML = `
      <div class="relative w-full h-[550px] overflow-hidden">
        <img src="${item.img}" alt="${item.title}" 
             class="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110" />
      </div>
      <div class="mt-5 text-center">
        <h3 class="text-lg font-semibold text-gray-800">${item.title}</h3>
        <p class="text-green-700 font-medium">${item.price}</p>
      </div>
    `;

    grid.appendChild(card);
  });
}
