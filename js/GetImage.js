var image = document.images[0];
var Original = document.createElement("img");

Original.onload = function () {
  imageProfile.src = this.src;
  imageProfile.className = "noblur";

  BGImage.src = this.src;
  BGImage.className = "noblur";
};

setTimeout(() => {
  Original.src =
    "../src/CHA_4183.png";

}, 50);
