const art = [
  {
    name: "Starry Night Over the Rhone",
    artist: "Vincent Van Gogh",
    published: "1888",
    type: "Post-Impressionist",
    img: "https://www.parisinsidersguide.com/image-files/van-gogh-starry-night-over-the-rhone-mc-800-2x1.jpg",
    alt: "Hirono Shelter Series Figure Set",
  },
  
];

function inject(art) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class = "card" data-cat = ${art.type}`
  )
}