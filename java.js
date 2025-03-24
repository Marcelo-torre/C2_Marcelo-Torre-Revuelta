function newImage() {
    var image = document.getElementById("myImage");

    if (image.src.match("image2")) {
        image.src = "image1.png";
    } else {
        image.src = "image2.png";
    }
}

function changeTeamImage(imageId) {
    var image = document.getElementById(imageId);

    if (imageId === 'barca') {
        if (image.src.match("image3")) {
            image.src = "image1.png";
        } else {
            image.src = "image3.png";
        }
    }
    else if (imageId === 'city') {
        if (image.src.match("image4")) {
            image.src = "image2.png";
        } else {
            image.src = "image4.png";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var testImage = document.getElementById("myImage");
});
