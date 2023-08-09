// Mahasiswa.js
const tBody = document.querySelector('tBody');
const tHead = document.querySelector('thead');
const dataMahasiswa = [
    {
        nim: 'SSI202203088',
        namaMhs: 'Struktur Data',
        prodi: 'Rahmam Manto, S.Kom',
        email: 'Selasa',
    },
    {
        nim: 'SSI202203088',
        namaMhs: 'Basis Data',
        prodi: 'Siti Delimasari',
        email: 'Rabu',
    }, {
        nim: 'SSI202203088',
        namaMhs: 'English 2',
        prodi: 'Atika Shinta N,S.Pd',
        email: 'Senin',
    }, {
        nim: 'SSI202203088',
        namaMhs: 'Interaksi Manusia & Komputer',
        prodi: 'Febri Meliana K.R.,S.Kom',
        email: 'Jumat',
    },
]

export async function showMahasiswa() {
    try {
        let tr = '';
        // Tampilkan data mata kuliah ke dalam tabel
        // ...
        tBody.innerHTML = tr;

        // Perbarui <thead> sesuai dengan data <tbody> yang ditampilkan
        const headRow = `
            <tr class="text-center">
                <th>No</th>
                <th>NIM</th>
                <th>Nama Mahasiswa</th>
                <th>Prodi</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        `;
        

        dataMahasiswa.forEach((mhs, index) => {
            const row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${mhs.nim}</td>
                        <td>${mhs.namaMhs}</td>
                        <td>${mhs.prodi}</td>
                        <td>${mhs.email}</td>
                        <td>
                            <button class="btn btn-primary btn-sm "><span class="material-icons md-18">visibility</span></button>
                            <button class="btn btn-success btn-sm "><span class="material-icons md-18">edit</span></button>
                            <button class="btn btn-danger btn-sm "><span class="material-icons md-18">delete</span></button>
                        </td>
                    </tr>
                    `;
            tr += row;
        });
        tHead.innerHTML = headRow;
        tBody.innerHTML = tr;
        return dataMahasiswa.length;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 0;
    }
}
// ...
