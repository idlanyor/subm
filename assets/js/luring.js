// luring.js
const tBody = document.querySelector('tBody');
const tHead = document.querySelector('thead');
const cardTitle = document.getElementById('toggleTitle')

async function readDataFromFile() {
    const response = await fetch('./data/dataLuring.json');
    const dataLuring = await response.json();
    return dataLuring;
}

export async function showLuring() {
    try {
        const dataLuring = await readDataFromFile();
        let tr = '';
        const headRow = `
                <tr class="text-center">
                    <th>No</th>
                    <th>Tanggal</th>
                    <th>Mata Kuliah</th>
                    <th>NIM Mahasiswa</th>
                    <th>Nama Mahasiswa</th>
                </tr>
            `;

        if (dataLuring.length === 0) {
            tr = '<tr><td colspan="8" class="text-center">Tidak ada data List Luring yang tersedia</td></tr>';
        } else {
            dataLuring.forEach((luring, index) => {
                const row = `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${luring.tglLuring}</td>
                            <td>#${luring.kodeMatkul} ${luring.namaMatkul}</td>
                            <td>${luring.nimMhs}</td>
                            <td>${luring.namaMhs}</td>
                            <td>
                                <button class="button is-info is-small"><span class="material-icons md-18">visibility</span></button>
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
        cardTitle.innerText = 'Data List Luring'
        return dataLuring.length;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 0;
    }
}
