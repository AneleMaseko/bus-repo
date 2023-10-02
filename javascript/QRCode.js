const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrimg= wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value; 
    if(!qrValue) return;
    generateBtn.InnerText= "Generating QR Code..";
    // getting a QR code of user entered value using the qrserver
    // api and passing the api returned img src to qrImg
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    
    qrimg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.InnerText = "Generating QR Code";
    })

});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})