const left = document.querySelector(".left");
const right = document.querySelector(".right");




var nomor = 1;

function ganti(angka) {
    nomor = angka;
    const lokasi = "IMG/" + angka + ".jpg";
    document.querySelector(".preview").src = lokasi;
}

left.addEventListener("click" , function (event) {
    nomor = nomor - 1;
    if (nomor < 1) {
        nomor = 10;
    }
    const images = "IMG/" + nomor + ".jpg";
    document.querySelector(".preview").src = images;
    // console.log(document.querySelector(".preview").src = images);
});

right.addEventListener("click" , function (event) {
    nomor = nomor + 1;
    if (nomor > 10) {
        nomor = 1;
    }
    const images = "IMG/" + nomor + ".jpg";
    document.querySelector(".preview").src = images;
    // console.log(document.querySelector(".preview").src = images);
});

