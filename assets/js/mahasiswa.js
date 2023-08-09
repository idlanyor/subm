// Mahasiswa.js
const tBody = document.querySelector('tBody');
const tHead = document.querySelector('thead');
const cardTitle = document.getElementById('toggleTitle')
async function readDataFromFile() {
    const response = await fetch('./data/dataMhs.json');
    const dataMahasiswa = await response.json();
    return dataMahasiswa;
}


export async function showMahasiswa() {
    try {
        const dataLuring = await readDataFromFile();

        let tr = '';
        tBody.innerHTML = tr;
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
        if (dataLuring.length === 0) {
            tr = '<tr><td colspan="8" class="text-center">Tidak ada data List Luring yang tersedia</td></tr>';
        } else {

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
        }
        tHead.innerHTML = headRow;
        tBody.innerHTML = tr;
        cardTitle.innerText = 'Data Mahasiswa'
        return dataMahasiswa.length;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 0;
    }
}
// ...
