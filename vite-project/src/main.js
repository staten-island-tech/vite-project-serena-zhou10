import "./style.css";

// preselected image gallery which can be filtered or changed
const art = [
  {
    name: "Starry Night Over the Rhone",
    artist: "Vincent van Gogh",
    published: "1888",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    alt: "Starry Night Over the Rhone",
    category: [
      "Post-Impressionism",
      "Night Scenes",
      "Seascapes & Water",
      "Cityscapes",
    ],
  },

  {
    name: "Café Terrace at Night",
    artist: "Vincent van Gogh",
    published: "1888",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG",
    alt: "Café Terrace at Night",
    category: ["Post-Impressionism", "Night Scenes", "Cityscapes"],
  },

  {
    name: "Starry Night",
    artist: "Vincent van Gogh",
    published: "1889",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    alt: "Starry Night",
    category: ["Post-Impressionism", "Night Scenes", "Landscapes"],
  },

  {
    name: "Nocturne in Black and Gold: The Falling Rocket",
    artist: "James McNeill Whistler",
    published: "1875",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Whistler-Nocturne_in_black_and_gold.jpg",
    alt: "Nocturne in Black and Gold: The Falling Rocket",
    category: ["American Realism", "Night Scenes"],
  },

  {
    name: "Paris Street; Rainy Day",
    artist: "Gustave Caillebotte",
    published: "1877",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg",
    alt: "Paris Street; Rainy Day",
    category: ["Impressionism", "Cityscapes"],
  },

  {
    name: "The Third Avenue El",
    artist: "John Sloan",
    published: "1928",
    img: "https://i.ebayimg.com/00/s/NjM1WDg0Mw==/z/ocIAAOSwMvpmx4Ah/$_57.JPG?set_id=880000500F",
    alt: "The Third Avenue El",
    category: ["American Realism", "Cityscapes"],
  },

  {
    name: "Kagurazaka Street after a Night Rain",
    artist: "Yoshida Hiroshi",
    published: "1929",
    img: "https://d7hftxdivxxvm.cloudfront.net/?height=640&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F6J3_8dPB36jzLEtxLQ2rig%2Flarge.jpg&width=432",
    alt: "Hiroshige’s Night Streets and Rain Scenes",
    category: ["Japanese Prints", "Night Scenes", "Cityscapes"],
  },

  {
    name: "Glittering Sea, from The Seto Inland Sea Series",
    artist: "Yoshida Hiroshi",
    published: "1926",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSby65N7MLwQDDlSbnb2NA4uHfZTsI67bX_LQ&s",
    alt: "Glittering Sea, from The Seto Inland Sea Series",
    category: ["Japanese Prints", "Seascapes & Water"],
  },

  {
    name: "The Great Wave Off Kanagawa",
    artist: "Hokusai",
    published: "1830",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOEEN0Q0yo1FT1eEV6OABHyuNABr3_LzX-g&s",
    alt: "The Great Wave Off Kanagawa",
    category: ["Japanese Prints", "Seascapes & Water"],
  },

  {
    name: "Moonlight, Wood Island Light",
    artist: "Winslow Homer",
    published: "1886",
    img: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11127/44025/main-image",
    alt: "Moonlight, Wood Island Light",
    category: ["American Realism", "Night Scenes", "Seascapes & Water"],
  },

  {
    name: "Impression, Sunrise",
    artist: "Claude Monet",
    published: "1872",
    img: "https://www.invaluable.com/blog/wp-content/uploads/sites/77/2021/01/Monet-Impression-Sunrise-1.jpg",
    alt: "Impression, Sunrise",
    category: ["Impressionism", "Seascapes & Water"],
  },

  {
    name: "A Sunday Afternoon on the Island of La Grande Jatte",
    artist: "Georges Seurat ",
    published: "1884-86",
    img: "https://www.invaluable.com/blog/wp-content/uploads/sites/77/2021/01/Georges_Seurat_-Sunday-Afternoon-on-La-Grande-Jatte-1.jpg",
    alt: "A Sunday Afternoon on the Island of La Grande Jatte",
    category: ["Post-Impressionism", "Landscapes"],
  },

  {
    name: "The Water Lily Pond",
    artist: "Claude Monet",
    published: "1899",
    img: "https://ccplonline.org/wp-content/uploads/2021/04/AE-25-Most-Famous-Paintings-2.png",
    alt: "The Water Lily Pond",
    category: ["Impressionism", "Seascapes & Water", "Landscapes"],
  },

  {
    name: "Paris Landscape",
    artist: "Takanori Oguiss",
    published: "1928",
    img: "https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/GMIII/MCAG/GMIII_MCAG_1946_36-001.jpg",
    alt: "Paris Landscape",
    category: ["Cityscapes"],
  },

  {
    name: "Woman with a Parasol - Madame Monet and Her Son",
    artist: "Claude Monet",
    published: "1875",
    img: "https://api.nga.gov/iiif/99758d9d-c10b-4d02-a198-7e49afb1f3a6/full/!800,800/0/default.jpg",
    alt: "Woman with a Parasol - Madame Monet and Her Son",
    category: ["Impressionism", "Landscapes"],
  },

  {
    name: "Palazzo da Mula, Venice",
    artist: "Claude Monet",
    published: "1908",
    img: "https://api.nga.gov/iiif/f339a180-c87a-446b-8605-060f7b53f1a3/full/!800,800/0/default.jpg",
    alt: "Palazzo da Mula, Venice",
    category: ["Impressionism", "Cityscapes", "Seascapes & Water"],
  },

  {
    name: "Banks of the Seine, Vétheuil",
    artist: "Claude Monet",
    published: "1880",
    img: "https://api.nga.gov/iiif/5dd2009f-7782-43d8-9892-be5733d8f43b/full/!800,800/0/default.jpg",
    alt: "Banks of the Seine, Vétheuil",
    category: ["Impressionism", "Landscapes", "Seascapes & Water"],
  },

  {
    name: "Mortlake Terrace",
    artist: "Joseph Mallord William Turner",
    published: "1827",
    img: "https://api.nga.gov/iiif/d90b641f-b6fe-4fc4-a520-69accf46513b/full/!800,800/0/default.jpg",
    alt: "Mortlake Terrace",
    category: ["Landscapes", "Seascapes & Water"],
  },

  {
    name: "The Magpie",
    artist: "Claude Monet",
    published: "1827",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg/1200px-Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg",
    alt: "The Magpie",
    category: ["Impressionism", "Landscapes"],
  },

  {
    name: "Snow at Argenteuil",
    artist: "Claude Monet",
    published: "1874-75",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Monet_Snow_at_Argenteuil_1875.jpg",
    alt: "Snow at Argenteuil",
    category: ["Impressionism", "Landscapes"],
  },
];

// put them on screen

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-cat="${item.category.join(", ")}">
      <img src="${item.img}" alt="${item.alt}" />
      <h2>${item.name}</h2>

     <h3>${item.artist}</h3>
     <p>${item.published}</p>
     </div>`
  );
}
document.addEventListener("DOMContentLoaded", () => {
  art.forEach(inject);
  enableModal();
});

// users can click on an image to generate a pop-up modal to learn more information
// "none" -> "block"
function enableModal() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalName = document.getElementById("modalName");
  const modalArtist = document.getElementById("modalArtist");
  const modalYear = document.getElementById("modalYear");

  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      modalImg.src = card.querySelector("img").src;
      modalName.textContent = card.querySelector("h2").textContent;
      modalArtist.textContent = card.querySelector("h3").textContent;
      modalYear.textContent = card.querySelector("p").textContent;

      modal.classList.add("show");
    });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
}

// filter them
function filterByCategory(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardCategory = card.dataset.cat;
    if (category === "All" || cardCategory === category) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

function setupFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter__buttons");

  filterButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const selected = event.target.textContent.trim();
      console.log("Filtering by:", selected);
      filterByCategory(selected);
    });
  });
}

setupFilterButtons();
filterByCategory("All");

// upload new images
const uploadForm = document.getElementById("uploadForm");

uploadForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fileInput = uploadForm.querySelector('input[type="file"]');
  const name = document.getElementById("uploadName").value;
  const artist = document.getElementById("uploadArtist").value;
  const year = document.getElementById("uploadYear").value;

  const file = fileInput.files[0];
  if (!file) return alert("Please select an image");

  const imgUrl = URL.createObjectURL(file);

  const newArt = {
    name: name,
    artist: artist,
    published: year,
    img: imgUrl,
    alt: name,
    category: ["User Upload"],
  };
  art.push(newArt);
  inject(newArt);
  enableModal();
  saveUploads();
  uploadForm.reset();
});

// random art of the day header
function randomArtOfTheDay() {
  const artOfDayImg = document.getElementById("artofDayImg");
  const artOfDayName = document.getElementById("artofDayName");
  const artOfDayArtist = document.getElementById("artofDayArtist");

  const randomIndex = Math.floor(Math.random() * art.length);
  const artItem = art[randomIndex];

  artOfDayImg.src = artItem.img;
  artOfDayImg.alt = artItem.alt;
  artOfDayName.textContent = artItem.name;
  artOfDayArtist.textContent = `by ${artItem.artist}`;
}

// light/dark mode or theming in general
document.querySelector(".theme__toggle").addEventListener("click", function () {
  const body = document.body;

  if (body.classList.contains("cool")) {
    body.classList.add("warm");
    body.classList.remove("cool");
  } else {
    body.classList.remove("warm");
    body.classList.add("cool");
  }

  console.log(body.classList);
});
