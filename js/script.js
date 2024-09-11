//Ini Javascript
function cekluas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const luas = (alas * tinggi) / 2;
    document.getElementById('rumusLuas').innerHTML = `L: 1/2 x a x t`;
    document.getElementById('rumusLuas2').innerHTML = `L: 1/2 x ${alas} cm x ${tinggi} cm`;
    document.getElementById('hasilluas').innerHTML = `L: ${luas} cm2`;
}

function cekkel() {
    const k1 = parseFloat(document.getElementById('k1').value);
    const k2 = parseFloat(document.getElementById('k2').value);
    const k3 = parseFloat(document.getElementById('k3').value);
    const keliling = k1 + k2 + k3;
    document.getElementById('hasilkel').innerHTML = `Keliling: ${keliling}`;
}

document.querySelector('.resetluas-btn').addEventListener('click', function() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilluas').innerHTML = '';
});

document.querySelector('.resetkel-btn').addEventListener('click', function() {
    document.getElementById('k1').value = '';
    document.getElementById('k2').value = '';
    document.getElementById('k3').value = '';
    document.getElementById('hasilkel').innerHTML = '';
});
