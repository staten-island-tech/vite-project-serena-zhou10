// preselected image gallery
const art = [
  {
    name: "Starry Night Over the Rhone",
    artist: "Vincent van Gogh",
    published: "1888",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    alt: "Starry Night Over the Rhone",
  },

  {
    name: "Café Terrace at Night",
    artist: "Vincent van Gogh",
    published: "1888",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG",
    alt: "Café Terrace at Night",
  },

  {
    name: "Starry Night",
    artist: "Vincent van Gogh",
    published: "1889",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    alt: "Starry Night",
  },

  {
    name: "Nocturne in Black and Gold: The Falling Rocket",
    artist: "James McNeill Whistler",
    published: "1875",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Whistler-Nocturne_in_black_and_gold.jpg",
    alt: "Nocturne in Black and Gold: The Falling Rocket",
  },

  {
    name: "Paris Street; Rainy Day",
    artist: "Gustave Caillebotte",
    published: "1877",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/17/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg",
    alt: "Paris Street; Rainy Day",
  },

  {
    name: "The Third Avenue El",
    artist: "John Sloan",
    published: "1928",
    img: "https://i.ebayimg.com/00/s/NjM1WDg0Mw==/z/ocIAAOSwMvpmx4Ah/$_57.JPG?set_id=880000500F",
    alt: "The Third Avenue El",
  },

  {
    name: "Kagurazaka Street after a Night Rain",
    artist: "Yoshida Hiroshi",
    published: "1929",
    img: "https://d7hftxdivxxvm.cloudfront.net/?height=640&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F6J3_8dPB36jzLEtxLQ2rig%2Flarge.jpg&width=432",
    alt: "Hiroshige’s Night Streets and Rain Scenes",
  },

  {
    name: "Glittering Sea, from The Seto Inland Sea Series",
    artist: "Yoshida Hiroshi",
    published: "1926",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSby65N7MLwQDDlSbnb2NA4uHfZTsI67bX_LQ&s",
    alt: "Glittering Sea, from The Seto Inland Sea Series",
  },

  {
    name: "The Great Wave Off Kanagawa",
    artist: "Hokusai",
    published: "1830",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvOEEN0Q0yo1FT1eEV6OABHyuNABr3_LzX-g&s",
    alt: "The Great Wave Off Kanagawa",
  },

  {
    name: "Moonlight, Wood Island Light",
    artist: "Winslow Homer",
    published: "1886",
    img: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11127/44025/main-image",
    alt: "Moonlight, Wood Island Light",
  },


];

// put them on screen 
function inject(art) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card" data-cat = ${art.type}">
    <img src=${art.img} alt = ${art.alt} />
     <h2>${art.name}</h2>
     <h3>$${art.artist}</h3>
     <p>$${art.published}</p>
     </div>`
  );
}

// filter them


// users can click on an image to generate a pop-up modal to learn more information


// upload new images (?) - what does this mean


// random art of the day header


// light/dark mode or theming in general
