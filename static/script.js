document.addEventListener("DOMContentLoaded", () => {
  fetch("http://127.0.0.1:5000/api/restaurants")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("restaurant-container");
      data.forEach((restaurant) => {
        const div = document.createElement("div");
        div.className = "restaurant";
        div.innerHTML = `
                    <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
                    <div class="restaurant-details">
                        <h2 class="restaurant-name">${restaurant.name}</h2>
                        <p class="cuisine"><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
                        <p class="rating"><strong>Rating:</strong> ${restaurant.rating} ⭐</p>
                    </div>
                `;
        container.appendChild(div);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
