

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll("#products article");

// Main filter function
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    products.forEach(product => {
        const productName = product.querySelector("h3").textContent.toLowerCase();
        const productDescription = product.querySelector("p").textContent.toLowerCase();

        if (
            productName.includes(searchTerm) ||
            productDescription.includes(searchTerm)
        ) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}

// Submit search (when clicking button)
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    filterProducts();
});

// Live search (while typing)
searchInput.addEventListener("input", function () {
    filterProducts();
});
