// matkul.js
const tBody = document.querySelector('tBody');
const tHead = document.querySelector('thead');
const cardTitle = document.getElementById('toggleTitle')

async function readDataFromFile() {
    const response = await fetch('./data/dataMatkul.json');
    const dataMatkul = await response.json();
    return dataMatkul;
}

export async function showMatkul() {
    try {
        const dataMatkul = await readDataFromFile();
        let tr = '';
        const headRow = `
                <tr>
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

        if (dataMatkul.length === 0) {
            tr = '<tr><td colspan="8" class="text-center">Tidak ada data Mata Kuliah yang tersedia</td></tr>';
        } else {



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
                            <td class="buttons are-small is-flex is-justify-content-center">
                                <button class="button is-info is-rounded"><span class="material-icons md-18">visibility</span></button>
                                <button class="button is-warning is-rounded"><span class="material-icons md-18">edit</span></button>
                                <button class="button is-danger is-rounded"><span class="material-icons md-18">delete</span></button>
                            </td>
                        </tr>
                        `;
                tr += row;
            });

        }
        tHead.innerHTML = headRow;
        tBody.innerHTML = tr;
        // console.log(cardTitle)
        cardTitle.innerText = 'Data Mata Kuliah'
        return dataMatkul.length;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 0;
    }
}
