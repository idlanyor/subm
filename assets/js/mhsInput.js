const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mahasiswaFilePath = 'mahasiswa.json';

function getInput(prompt) {
    return new Promise((resolve, reject) => {
        rl.question(prompt, (input) => {
            resolve(input);
        });
    });
}

async function validateNonEmptyInput(prompt) {
    let input = await getInput(prompt);
    while (!input.trim()) {
        console.log('Input tidak boleh kosong.');
        input = await getInput(prompt);
    }
    return input;
}

async function addMhs() {
    const kodeMatkul = await validateNonEmptyInput('Masukkan kode mata kuliah: ');
    const mataKuliah = await validateNonEmptyInput('Masukkan nama mata kuliah: ');
    const dosenPengampu = await validateNonEmptyInput('Masukkan dosen pengampu: ');
    const hari = await validateNonEmptyInput('Masukkan hari: ');
    const jam = await validateNonEmptyInput('Masukkan jam: ');
    const prodi = await validateNonEmptyInput('Masukkan program studi: ');

    const Mhs = {
        kodeMatkul,
        mataKuliah,
        dosenPengampu,
        hari,
        jam,
        prodi
    };

    const existingMahasiswa = fs.existsSync(mahasiswaFilePath)
        ? JSON.parse(fs.readFileSync(mahasiswaFilePath, 'utf8'))
        : [];

    existingMahasiswa.push(Mhs);

    fs.writeFileSync(mahasiswaFilePath, JSON.stringify(existingmahasiswa, null, 2));

    const continueInput = await getInput('Tambahkan mata kuliah lain? (y/n): ');
    if (continueInput.toLowerCase() === 'y') {
        await addMhs();
    } else {
        rl.close();
    }
}

async function main() {
    console.log('Selamat datang di aplikasi input mata kuliah!');
    await addMhs();
}

main().catch((err) => {
    console.error('Terjadi kesalahan:', err);
});
