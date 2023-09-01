document.addEventListener("DOMContentLoaded", function() {
    var images = [
      "albedo.img.1.jpg",
      "albedo.img.2.jpg",
      "albedo.img.3.jpg",
      "albedo.img.4.jpg",
      "albedo.img.5.jpg",
      "albedo.img.6.jpg",
      "albedo.img.7.jpg",
      "albedo.img.8.jpg",
      "albedo.img.9.jpg",
      "albedo.img.10.jpg",
      "albedo.img.11.jpg",
      "albedo.img.12.jpg",
      "albedo.img.13.jpg",
      "albedo.img.14.jpg",
      "albedo.img.15.jpg",
      "albedo.img.16.jpg",
      "albedo.img.17.jpg",
      "albedo.img.18.jpg",
      "albedo.img.19.jpg",
      "albedo.img.20.jpg",
      "albedo.img.21.jpg",
      
    ];
    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];
    document.getElementById("albedo-image").src = "/genshin albedo hot/" + randomImage;
    console.log("/genshin albedo hot/" + randomImage)
  });