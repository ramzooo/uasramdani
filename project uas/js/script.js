function login() {
  alert("Login berhasil");
  window.location.href = "profil.html";
}

function simpanTransaksi() {
  let nama = document.getElementById("nama").value;
  let jumlah = document.getElementById("jumlah").value;
  let kategori = document.getElementById("kategori").value;

  if (nama === "" || jumlah === "" || kategori === "") {
    alert("Semua data wajib diisi!");
    return false;
  }

  let tabel = document.getElementById("tabelTransaksi");
  let baris = tabel.insertRow();

  baris.insertCell(0).innerHTML = nama;
  baris.insertCell(1).innerHTML = jumlah;
  baris.insertCell(2).innerHTML = kategori;

  document.getElementById("nama").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("kategori").value = "";

  return false;
}