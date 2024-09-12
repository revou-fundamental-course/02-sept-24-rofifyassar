//Ini Javascript

//Script Mencari Rumus Luas Segitiga
function cekluas() {
    let alas = document.getElementById('alas').value;
    let tinggi = document.getElementById('tinggi').value;
    let luas = (alas * tinggi) / 2;
    document.getElementById('rumusLuas').innerHTML = `L: 1/2 x a x t`;
    document.getElementById('rumusLuas2').innerHTML = `L: 1/2 x ${alas} cm x ${tinggi} cm`;
    document.getElementById('hasilluas').innerHTML = `L: ${luas} cm2`;

    if (alas == '' || tinggi == '') {
        alert('Form Masih Kosong');
    }
    console.log(alas);
    console.log(tinggi);
}
//Script Mencari Rumus Keliling Segitiga
function cekkel() {
    const s1 = parseFloat(document.getElementById('s1').value);
    const s2 = parseFloat(document.getElementById('s2').value);
    const s3 = parseFloat(document.getElementById('s3').value);
    const keliling = s1 + s2 + s3;
    document.getElementById('rumusKel').innerHTML = `K: S1 + S2 + S3`;
    document.getElementById('rumusKel2').innerHTML = `K: ${s1} cm + ${s2} cm + ${s3} cm`;
    document.getElementById('hasilkel').innerHTML = `K: ${keliling} cm`;
}



document.querySelector('.resetluas-btn').addEventListener('click', function() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilluas').innerHTML = '';
    document.getElementById('rumusLuas').innerHTML = '';
    document.getElementById('rumusLuas2').innerHTML = '';
});

document.querySelector('.resetkel-btn').addEventListener('click', function() {
    document.getElementById('s1').value = '';
    document.getElementById('s2').value = '';
    document.getElementById('s3').value = '';
    document.getElementById('hasilkel').innerHTML = '';
    document.getElementById('rumusKel').innerHTML = '';
    document.getElementById('rumusKel2').innerHTML = '';
});
