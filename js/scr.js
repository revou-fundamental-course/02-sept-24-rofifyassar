//ini javasript
function tryDOM() {
    let getDOM = document.getElementsByClassName('main-content');
    getDOM[0].style.display = 'none'
    console.log(getDOM);
}
var title = document.getElementById('header-title');


function validateLuas(){
    let alas = document.getElementById('alas').value;
    let tinggi = document.getElementById('tinggi').value;
    if (alas == '' || tinggi == '' || alas.includes('e') || alas.includes('e')) {
        alert('Form Masih Kosong');
    }
    console.log(alas);
    console.log(tinggi);
}