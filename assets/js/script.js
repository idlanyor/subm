// Fungsi untuk mengimpor modul secara dinamis
async function imporModul(nama, file) {
    const modul = await import(`./${file}.js`);
    return modul[nama];
}

// Fungsi untuk menampilkan data ke dalam badge
async function tampilkanData(aliasModul, fileModul, namaElemenBadge) {
    const showData = await imporModul(aliasModul, fileModul);
    const jmlData = await showData();
    const badge = document.getElementById(namaElemenBadge);
    badge.textContent = await jmlData;
}

// Fungsi untuk mengubah data dan tampilkan ke badge
const changeData = async (aliasModul, fileModul, namaElemenBadge) => {
    await tampilkanData(aliasModul, fileModul, namaElemenBadge);
};

// Event handler untuk tombol-tombol
const eventHandler = (aliasModul, fileModul, namaElemenBadge) => {
    changeData(aliasModul, fileModul, namaElemenBadge);
};

// Daftar tombol dan konfigurasinya
const tombolConfig = [
    { aliasModul: 'showMatkul', fileModul: 'matkul', namaElemenBadge: 'countMatkul', btnElemen: 'btnMatkul' },
    { aliasModul: 'showMahasiswa', fileModul: 'mahasiswa', namaElemenBadge: 'countMhs', btnElemen: 'btnMhs' },
    { aliasModul: 'showProdi', fileModul: 'prodi', namaElemenBadge: 'countProdi', btnElemen: 'btnProdi' },
    { aliasModul: 'showLuring', fileModul: 'luring', namaElemenBadge: 'countLuring', btnElemen: 'btnLuring' },
];

// Tambahkan event listener untuk setiap tombol
tombolConfig.forEach(({ aliasModul, fileModul, namaElemenBadge, btnElemen }) => {
    const btn = document.getElementById(btnElemen);
    btn.addEventListener('click', async () => {
        await eventHandler(aliasModul, fileModul, namaElemenBadge);
    });
});

// Tampilkan data pertama kali ketika halaman dimuat
await tampilkanData('showMatkul', 'matkul', 'countMatkul');
