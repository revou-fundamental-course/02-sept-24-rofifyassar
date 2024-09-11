//Ini Javascript
function cekluas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const luas = (alas * tinggi) / 2;
    tampilkanHasil(`Luas: ${luas.toFixed(2)}`);
}

function tampilkanHasil(pesan) {
    document.getElementById('hasilluas').innerHTML = pesan;
}

document.querySelector('.resetluas-btn').addEventListener('click', function() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasilluas').innerHTML = '';
});

