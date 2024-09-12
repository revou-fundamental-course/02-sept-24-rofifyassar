//Ini Javascript

//Script Mencari Rumus Luas Segitiga
function cekluas() {
    let alas = document.getElementById('alas').value;
    let tinggi = document.getElementById('tinggi').value;
    let luas = (alas * tinggi) / 2;
    document.getElementById('rumusluas').innerHTML = `L: 1/2 x a x t`;
    document.getElementById('rumusluas2').innerHTML = `L: 1/2 x ${alas} cm x ${tinggi} cm`;
    document.getElementById('hasilluas').innerHTML = `L: ${luas} cm2`;

    if (alas == '' || tinggi == '') {
        alert('Form Masih Kosong');
    }
    console.log(alas);
    console.log(tinggi);
}

//Script Mencari Rumus Keliling Segitiga
function cekkel() {
    let s1 = document.getElementById('s1').value;
    let s2 = document.getElementById('s2').value;
    let s3 = document.getElementById('s3').value;
    let keliling = s1 + s2 + s3;
    document.getElementById('rumuskel').innerHTML = `K: S1 + S2 + S3`;
    document.getElementById('rumuskel2').innerHTML = `K: ${s1} cm + ${s2} cm + ${s3} cm`;
    document.getElementById('hasilkel').innerHTML = `K: ${keliling} cm`;
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
    let alasj = document.getElementById('alasj').value;
    let tinggij = document.getElementById('tinggij').value;
    let luasj = (alasj * tinggij);
    document.getElementById('rumusluasjajargenjang').innerHTML = `L: a x t`;
    document.getElementById('rumusluasjajargenjang2').innerHTML = `L: ${alasj} cm x ${tinggij} cm`;
    document.getElementById('hasilluas2').innerHTML = `L: ${luasj} cm2`;

    if (alasj == '' || tinggij == '') {
        alert('Form Masih Kosong');
    }
    console.log(alasj);
    console.log(tinggij);
}

//Script Mencari Rumus Keliling Jajar Genjang
function cekkel2() {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let kelilingj = 2 * (a + b);
    document.getElementById('rumuskeljajargenjang').innerHTML = `K: 2 x (a + b)`;
    document.getElementById('rumuskeljajargenjang2').innerHTML = `K: 2 x (${a} cm + ${b} cm)`;
    document.getElementById('hasilkel2').innerHTML = `K: ${kelilingj} cm`;
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