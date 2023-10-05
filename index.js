const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const genreateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
let size = sizes.value
const qrContainer = document.querySelector('.qr-body');

genreateBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else {
        alert("Enter Text or Url To Generate Your QR Code")
    }
   
});



sizes.addEventListener('change', (e) => {
    size = e.target.value;
    generateQRCode();
});

downloadBtn.addEventListener('click', () =>{
    let img = document.querySelector('.qr-body img');
    if( img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr)
    }

    else {
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`)
    }
})

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}