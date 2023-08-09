// matkul.js
const tBody = document.querySelector('tBody');
const tHead = document.querySelector('thead');

async function readDataFromFile() {
    const response = await fetch('./data/dataMatkul.json');
    const dataMatkul = await response.json();
    return dataMatkul;
}

export async function showMatkul() {
    try {
        const dataMatkul = await readDataFromFile();
        let tr = '';

        if (dataMatkul.length === 0) {
            tr = '<tr><td colspan="8" class="text-center">Tidak ada data Mata Kuliah yang tersedia</td></tr>';
        } else {
            // Tampilkan data mata kuliah ke dalam tabel
            // ...

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
                            <td>#${matkul.kodeMatkul}</td>
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
        }

        tBody.innerHTML = tr;
        return dataMatkul.length;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 0;
    }
}
