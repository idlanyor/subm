// matkul.js
const tBody = document.querySelector('tBody');
const tHead = document.querySelector('thead');
const dataMatkul = [
    {
        kodeMatkul: '#33',
        mataKuliah: 'Struktur Data',
        dosenPengampu: 'Rahmam Manto, S.Kom',
        hari: 'Selasa',
        jam: '19.30 - 20.30',
        prodi: 'STE & SSI',
    },
    {
        kodeMatkul: '#44',
        mataKuliah: 'Basis Data',
        dosenPengampu: 'Siti Delimasari',
        hari: 'Rabu',
        jam: '19.00 - 20.00',
        prodi: 'DTI & SSI',
    }, {
        kodeMatkul: '#95',
        mataKuliah: 'English 2',
        dosenPengampu: 'Atika Shinta N,S.Pd',
        hari: 'Senin',
        jam: '19.00 - 19.45',
        prodi: 'SSI,DKA,DTI.STE',
    }, {
        kodeMatkul: '#82',
        mataKuliah: 'Interaksi Manusia & Komputer',
        dosenPengampu: 'Febri Meliana K.R.,S.Kom',
        hari: 'Jumat',
        jam: '17.30 - 18.30',
        prodi: 'SSI',
    },
]

export async function showMatkul() {
    try {
        let tr = '';
        // Tampilkan data mata kuliah ke dalam tabel
        // ...
        tBody.innerHTML = tr;

        // Perbarui <thead> sesuai dengan data <tbody> yang ditampilkan
        const headRow = `
            <tr class="text-center">
                <th>No</th>
                <th>Kode</th>
                <th>Nama Mata Kuliah</th>
                <th>Dosen</th>
                <th>Hari</th>
                <th>Jam</th>
                <th>Prodi</th>
                <th>Action</th>
            </tr>
        `;
        

        dataMatkul.forEach((matkul, index) => {
            const row = `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${matkul.kodeMatkul}</td>
                        <td>${matkul.mataKuliah}</td>
                        <td>${matkul.dosenPengampu}</td>
                        <td>${matkul.hari}</td>
                        <td>${matkul.jam}</td>
                        <td>${matkul.prodi}</td>
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
        return dataMatkul.length;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 0;
    }
}
// ...
