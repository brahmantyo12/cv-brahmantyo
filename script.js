// Mengambil semua elemen dengan kelas 'accordion'
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Menambah/menghapus kelas 'active' untuk styling
    this.classList.toggle("active");

    // Logika untuk menyembunyikan atau menampilkan panel
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.style.borderRadius = "12px"; // Kembali bulat saat ditutup
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.style.borderRadius = "12px 12px 0 0"; // Rata bawah saat dibuka
    } 
  });
}