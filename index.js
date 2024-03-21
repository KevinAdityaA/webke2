function tampilkanAlert() {
  alert("Terima kasih! Pesan Anda telah berhasil dikirim.");
}

document.getElementById("formulir").addEventListener("submit", function(event) {
  event.preventDefault();
  tampilkanAlert();
});