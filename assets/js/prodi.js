// prodi.js
const tBody = document.querySelector('tBody');
const tHead = document.querySelector('thead');
const cardTitle = document.getElementById('toggleTitle')


async function readDataFromFile() {
    const response = await fetch('./data/dataProdi.json');
    const dataProdi = await response.json();
    return dataProdi;
}

export async function showProdi() {
    try {
        const dataProdi = await readDataFromFile();
        let tr = '';
        const headRow = `
                <tr class="text-center">
                    <th>No</th>
                    <th>Nama Prodi</th>
                    <th>Kode Prodi</th>
                    <th>Jenjang</th>
                </tr>
            `;

        if (dataProdi.length === 0) {
            tr = '<tr><td colspan="8" class="text-center">Tidak ada data Prodi yang tersedia</td></tr>';
        } else {


            dataProdi.forEach((prodi, index) => {
                const row = `
                        <tr>
                            <td>${index + 1}</td>
                            <td>#${prodi.namaProdi}</td>
                            <td>${prodi.kodeProdi}</td>
                            <td>${prodi.jenjang}</td>
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
        cardTitle.innerText = 'Data Prodi'
        return dataProdi.length;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        return 0;
    }
}
