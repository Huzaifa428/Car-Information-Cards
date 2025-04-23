var cars = [
  {
    name: "Model S",
    brand: "Tesla",
    model: "2023",
    year: 2023,
    image:
      "https://tsportline.com/cdn/shop/articles/tmaxx-diamond-white-gold-ppf-tesla-model-s-track-package-paint-protection-film-wm-1_1600x.jpg?v=1719508357",
  },
  {
    name: "Mustang",
    brand: "Ford",
    model: "2022",
    year: 2022,
    image:
      "https://www.ford.com/is/image/content/dam/na/ford/en_us/images/mustang/2025/dm/_S5A3247_V4_ST.tif?croppathe=21x9&wid=1440&fmt=webp",
  },
  {
    name: "Civic",
    brand: "Honda",
    model: "2021",
    year: 2021,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrfNtKuU5dZc0VHiHDr54zkHr7Z_tGH2JXDA&s",
  },
  {
    name: "Camry",
    brand: "Toyota",
    model: "2020",
    year: 2020,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQ48EaN72oCiqwpGoM8NAvtpPmICBqTh2Qg&s",
  },
  {
    name: "Corolla",
    brand: "Toyota",
    model: "2021",
    year: 2021,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcHiiGXFEA0VRXJOQfHu72lSOxqNNWBhAzsA&s",
  },
  {
    name: "F-150",
    brand: "Ford",
    model: "2022",
    year: 2022,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKNHwUiBfL5qzYyovHsJJjsRq7Oo9fybguQ&s",
  },
  {
    name: "Chiron",
    brand: "Bugatti",
    model: "2023",
    year: 2023,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQibO4lneM-mgGTsF2EOYvjs9zeawbCC5ulOw&s",
  },
  {
    name: "A8",
    brand: "Audi",
    model: "2021",
    year: 2021,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIYsfk5EtMjsfzdDwr-qP_bggTz1OnwwcPQ&s",
  },
  {
    name: "M3",
    brand: "BMW",
    model: "2020",
    year: 2020,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfNd65IkYNEDhbJPw7wCXSMoMvlKm35lowFA&s",
  },
];

function createCarCards() {
  var cardContainer = document.getElementById("card-container");

  cars.forEach((car) => {
    var card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p><strong>Brand:</strong> ${car.brand}</p>
                <p><strong>Model:</strong> ${car.model}</p>
                <p><strong>Year:</strong> ${car.year}</p>
            `;

    cardContainer.appendChild(card);
  });
}

createCarCards();
