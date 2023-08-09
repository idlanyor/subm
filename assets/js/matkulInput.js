const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const coursesFilePath = 'courses.json';

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

async function addCourse() {
    const kodeMatkul = await validateNonEmptyInput('Masukkan kode mata kuliah: ');
    const mataKuliah = await validateNonEmptyInput('Masukkan nama mata kuliah: ');
    const dosenPengampu = await validateNonEmptyInput('Masukkan dosen pengampu: ');
    const hari = await validateNonEmptyInput('Masukkan hari: ');
    const jam = await validateNonEmptyInput('Masukkan jam: ');
    const prodi = await validateNonEmptyInput('Masukkan program studi: ');

    const course = {
        kodeMatkul,
        mataKuliah,
        dosenPengampu,
        hari,
        jam,
        prodi
    };

    const existingCourses = fs.existsSync(coursesFilePath)
        ? JSON.parse(fs.readFileSync(coursesFilePath, 'utf8'))
        : [];

    existingCourses.push(course);

    fs.writeFileSync(coursesFilePath, JSON.stringify(existingCourses, null, 2));

    const continueInput = await getInput('Tambahkan mata kuliah lain? (y/n): ');
    if (continueInput.toLowerCase() === 'y') {
        await addCourse();
    } else {
        rl.close();
    }
}

async function main() {
    console.log('Selamat datang di aplikasi input mata kuliah!');
    await addCourse();
}

main().catch((err) => {
    console.error('Terjadi kesalahan:', err);
});
