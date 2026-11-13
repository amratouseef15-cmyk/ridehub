const vehicles = [
  {
    name: "Mercedes-Benz C-Class",
    type: "car",
    category: "Luxury sedan",
    detail: "2024 · Automatic · Petrol",
    price: "₹58.5 lakh",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "BMW 3 Series",
    type: "car",
    category: "Sport sedan",
    detail: "2024 · Automatic · Petrol",
    price: "₹72.9 lakh",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Range Rover Evoque",
    type: "car",
    category: "Premium SUV",
    detail: "2023 · Automatic · Diesel",
    price: "₹67.9 lakh",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Triumph Bonneville",
    type: "bike",
    category: "Classic motorcycle",
    detail: "2024 · 900 cc · Petrol",
    price: "₹9.9 lakh",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Royal Enfield Hunter 350",
    type: "bike",
    category: "City motorcycle",
    detail: "2024 · 350 cc · Petrol",
    price: "₹1.5 lakh",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Ducati Scrambler",
    type: "bike",
    category: "Modern classic",
    detail: "2023 · 803 cc · Petrol",
    price: "₹10.4 lakh",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=900&q=80"
  }
];

const vehicleGrid = document.querySelector("#vehicleGrid");
const searchInput = document.querySelector("#searchInput");
const resultsCount = document.querySelector("#resultsCount");
const emptyMessage = document.querySelector("#emptyMessage");
const filterButtons = document.querySelectorAll(".filter-button");

let selectedFilter = "all";

function showVehicles() {
  const searchText = searchInput.value.trim().toLowerCase();

  const matchingVehicles = vehicles.filter((vehicle) => {
    const matchesFilter = selectedFilter === "all" || vehicle.type === selectedFilter;
    const searchableText = `${vehicle.name} ${vehicle.category} ${vehicle.detail}`.toLowerCase();
    return matchesFilter && searchableText.includes(searchText);
  });

  vehicleGrid.innerHTML = matchingVehicles.map((vehicle) => `
    <article class="vehicle-card">
      <div class="vehicle-image">
        <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy">
        <span class="vehicle-tag">${vehicle.category}</span>
      </div>
      <div class="vehicle-info">
        <span class="vehicle-type">${vehicle.type}</span>
        <h3>${vehicle.name}</h3>
        <p class="vehicle-detail">${vehicle.detail}</p>
        <div class="vehicle-bottom">
          <span class="vehicle-price">${vehicle.price} <small>starting</small></span>
          <a class="vehicle-link" href="#about">View details ↗</a>
        </div>
      </div>
    </article>
  `).join("");

  resultsCount.textContent = `${matchingVehicles.length} ${matchingVehicles.length === 1 ? "ride" : "rides"} found`;
  emptyMessage.hidden = matchingVehicles.length > 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    showVehicles();
  });
});

searchInput.addEventListener("input", showVehicles);

showVehicles();