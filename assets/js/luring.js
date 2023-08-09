// luring.js
const tBody = document.querySelector('tBody');
const tHead = document.querySelector('thead');

async function readDataFromFile() {
    const response = await fetch('./data/dataLuring.json');
    const dataLuring = await response.json();
    return dataLuring;
}

export async function showLuring() {
    try {
        const dataLuring = await readDataFromFile();
        let tr = '';

        if (dataLuring.length === 0) {
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

            dataLuring.forEach((luring, index) => {
                const row = `
                        <tr>
                            <td>${index + 1}</td>
                            <td>#${luring.kodeLuring}</td>
                            <td>${luring.mataKuliah}</td>
                            <td>${luring.dosenPengampu}</td>
                            <td>${luring.hari}</td>
                            <td>${luring.jam}</td>
                            <td>${luring.prodi}</td>
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
        return dataLuring.length;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 0;
    }
}
