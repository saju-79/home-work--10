document.getElementById('add-btn').addEventListener("click" , function(event){
    event.preventDefault();
    const amount = parseInt( document.getElementById("number-input").value);
    
    const pin =parseInt(document.getElementById("pin").value);
    const mainBlance =parseInt(document.getElementById("mai-blance").innerText);
    // console.log(amount)
    if( pin === 2962 && amount !== "string"){
        const sum =parseFloat(mainBlance + amount) ;
        document.getElementById("mai-blance").innerText = sum;
        console.log (sum)
    }
    else{
    alert('pin shothik noi ')
    }
});

 document.getElementById("Cashout").style.display = 'none'
document.getElementById('add-money').addEventListener('click' , function(){
    const addMoney = document.getElementById("chash")
    const cashOut = document.getElementById("Cashout")
    addMoney.style.display = "block";
    cashOut.style.display = "none"
})

document.getElementById("cash").addEventListener('click' , function(){
   const thisIs = document.getElementById("chash");
   const thatIs = document.getElementById("Cashout");
   thisIs.style.display = "block"
   thatIs.style.display = "none"
})