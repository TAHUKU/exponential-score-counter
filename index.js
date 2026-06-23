// 1. Kita pakai CONST karena tombol dan teks HTML di halaman tidak akan berubah atau berganti
const tombol = document.getElementById('tombol-tambah');
const teksSkor = document.getElementById('tampilan-skor');

// 2. Kita pakai LET karena angka skor ini AKAN BERUBAH (ditambah terus)
let skor = 1;

// 3. Logika ketika tombol diklik
tombol.addEventListener('click', function() {
    // Skor ditambah 1 setiap kali diklik
    skor = skor * 2; 
    
    // Tampilkan skor yang baru ke layar HTML
    teksSkor.innerText = skor;
});

// RESET
const reset = document.getElementById('tombol reset');

reset.addEventListener('click', function() {
     skor = 1;

    teksSkor.innerText = skor;
});

