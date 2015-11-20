// vars

var backgroundImage = document.getElementById('unsplash-img');

function newImage() {
  var image = "url('https://source.unsplash.com/random/1920x1080')";
  backgroundImage.style.backgroundImage = image;
};

newImage();
