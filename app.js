const body = document.querySelector("body") ;
const button = document.querySelector("button") ;
const image = [ "url('assets/1.jpg')", "url('assets/2.jpg')", "url('assets/3.jpg')",  ]

button.addEventListener("click", changeBackground) 

let turn = 0 ;

function changeBackground() {
  // console.log(turn) ;
   if (turn == 3) turn = 0
    const selectedImage = image [turn] ;
    turn++ ;
    body.style.backgroundImage = selectedImage ;
}

changeBackground();

function creditAccount() {
    var amountWithdrawn, numberMaturities ; // giriş değişkenleri
    var payment, totalAmount ; // çıkış değişkenleri

    amountWithdrawn = document.getElementById("txtLoanAmount").value ;

    var liste = document.getElementById("listDate") ;
    numberMaturities = liste.options[liste.selectedIndex].value ;
   
    if (numberMaturities == 12) {
        totalAmount = amountWithdrawn * 1.1 ;
    } 

    else if (numberMaturities == 24) {
        totalAmount = amountWithdrawn * 1.2 ;
    } 
    
    else if (numberMaturities == 36) {
        totalAmount = amountWithdrawn * 1.3 ;
    } 

    else if (numberMaturities == 48) {
        totalAmount = amountWithdrawn * 1.4 ;
    } 
    
    payment = totalAmount / numberMaturities ;

    result.style.display = "block";
    result.innerHTML = `<div>Geri Ödeme Tuttarı : <span>${totalAmount.toFixed(2)} tl </span> </div>
    <div>Aylık Taksit Tutarı : <span>${payment.toFixed(2)} tl </span> </div>` ;
}
 