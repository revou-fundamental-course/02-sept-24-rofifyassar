//Ini Javascript

//Script Mencari Rumus Luas Segitiga
function cekluas() {
    // Ambil nilai dari elemen input
    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value);

    // Validasi input
    if (isNaN(alas) || isNaN(tinggi) || alas === '' || tinggi === '') {
        alert('Form Masih Kosong atau Input Tidak Valid');
        return false;
    }

    // Hitung luas
    let luas = (alas * tinggi) / 2;

    // Perbarui elemen HTML dengan hasil
    document.getElementById('rumusluas').innerHTML = `L: 1/2 x a x t`;
    document.getElementById('rumusluas2').innerHTML = `L: 1/2 x ${alas} cm x ${tinggi} cm`;
    document.getElementById('hasilluas').innerHTML = `L: ${luas} cm2`;

    // Debugging: tampilkan nilai di konsol
    console.log(alas);
    console.log(tinggi);

    return true;
}


//Script Mencari Rumus Keliling Segitiga
function cekkel() {
    // Ambil nilai dari elemen input
    let s1 = parseFloat(document.getElementById('s1').value);
    let s2 = parseFloat(document.getElementById('s2').value);
    let s3 = parseFloat(document.getElementById('s3').value);

    // Validasi input
    if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 === '' || s2 === '' || s3 === '') {
        alert('Form Masih Kosong atau Input Tidak Valid');
        return false;
    }

    // Hitung keliling
    let keliling = s1 + s2 + s3;

    // Perbarui elemen HTML dengan hasil
    document.getElementById('rumuskel').innerHTML = `K: S1 + S2 + S3`;
    document.getElementById('rumuskel2').innerHTML = `K: ${s1} cm + ${s2} cm + ${s3} cm`;
    document.getElementById('hasilkel').innerHTML = `K: ${keliling} cm`;

    // Debugging: tampilkan nilai di konsol
    console.log(s1);
    console.log(s2);

    return true;
}


//Reset Button Luas Segitiga
document.querySelector('.resetluas-btn').addEventListener('click', function() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilluas').innerHTML = '';
    document.getElementById('rumusluas').innerHTML = '';
    document.getElementById('rumusluas2').innerHTML = '';
});

//Reset Button Keliling Segitiga
document.querySelector('.resetkel-btn').addEventListener('click', function() {
    document.getElementById('s1').value = '';
    document.getElementById('s2').value = '';
    document.getElementById('s3').value = '';
    document.getElementById('hasilkel').innerHTML = '';
    document.getElementById('rumuskel').innerHTML = '';
    document.getElementById('rumuskel2').innerHTML = '';
});

//Script Mencari Rumus Luas Jajar Genjang
function cekluas2() {
    // Ambil nilai dari elemen input
    let alasj = parseFloat(document.getElementById('alasj').value);
    let tinggij = parseFloat(document.getElementById('tinggij').value);

    // Validasi input
    if (isNaN(alasj) || isNaN(tinggij) || alasj === '' || tinggij === '') {
        alert('Form Masih Kosong atau Input Tidak Valid');
        return false;
    }

    // Hitung luas
    let luasj = (alasj * tinggij);

    // Perbarui elemen HTML dengan hasil
    document.getElementById('rumusluasjajargenjang').innerHTML = `L: a x t`;
    document.getElementById('rumusluasjajargenjang2').innerHTML = `L: ${alasj} cm x ${tinggij} cm`;
    document.getElementById('hasilluas2').innerHTML = `L: ${luasj} cm2`;

    // Debugging: tampilkan nilai di konsol
    console.log(alasj);
    console.log(tinggij);

    return true;
}

//Script Mencari Keliling Luas Jajar Genjang
function cekkel2() {
    // Ambil nilai dari elemen input
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    // Validasi input
    if (isNaN(a) || isNaN(b) || a === '' || b === '') {
        alert('Form Masih Kosong atau Input Tidak Valid');
        return false;
    }

    // Hitung luas
    let kelilingj = (a * b);

    // Perbarui elemen HTML dengan hasil
    document.getElementById('rumuskeljajargenjang').innerHTML = `L: a x t`;
    document.getElementById('rumuskeljajargenjang2').innerHTML = `L: ${a} cm x ${b} cm`;
    document.getElementById('hasilkel2').innerHTML = `L: ${kelilingj} cm`;

    // Debugging: tampilkan nilai di konsol
    console.log(alasj);
    console.log(tinggij);

    return true;
}

//Reset Button Luas Jajar Genjang
document.querySelector('.resetluas2-btn').addEventListener('click', function() {
    document.getElementById('alasj').value = '';
    document.getElementById('tinggij').value = '';
    document.getElementById('hasilluas2').innerHTML = '';
    document.getElementById('rumusluasjajargenjang').innerHTML = '';
    document.getElementById('rumusluasjajargenjang2').innerHTML = '';
});

//Reset Button Keliling Jajar Genjang
document.querySelector('.resetkel2-btn').addEventListener('click', function() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('hasilkel2').innerHTML = '';
    document.getElementById('rumuskeljajargenjang').innerHTML = '';
    document.getElementById('rumuskeljajargenjang2').innerHTML = '';
});

// Script Section is
function scrollToSection(sectionId) {
    // Dapatkan elemen berdasarkan ID
    var element = document.getElementById(sectionId);
    
    // Scroll ke elemen dengan smooth behavior
    element.scrollIntoView({ behavior: 'smooth' });
}
