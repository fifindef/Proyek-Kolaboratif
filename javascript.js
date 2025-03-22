// File: javascript.js
document.addEventListener("DOMContentLoaded", function() {
    let judul = document.querySelector("header h1");
    judul.style.opacity = "0";
    judul.style.transition = "opacity 1.5s ease-in-out";

    setTimeout(() => {
        judul.style.opacity = "1";
    }, 750);

    // Animasi gambar masuk saat halaman dimuat
    let images = document.querySelectorAll(".destinasi img");
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add("show");
        }, 500 * (index + 1)); // Delay per gambar
    });
});

function tampilkanAlert() {
    alert("Untuk info lebih lanjut hubungi travel@gmail.com");
}
