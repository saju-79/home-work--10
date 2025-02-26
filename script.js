document.getElementById('login-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("pin").value;
    const string = parseInt(pin)

    // const convertedPin = parseInt(pin);
    const amount = document.getElementById("Acount-nunber").value;
    // const convertedAmount = parseFloat(amount);
    // const mainBalance = document.getElementById("main-balance").innerText;
    // const convertedMainBalance = parseFloat(mainBalance);

    if (amount.length === 11) {
        if (string === 2962) {
            // const sum = convertedMainBalance + convertedAmount;
            // document.getElementById("main-balance").innerText = sum;
            window.location.href = "./main.html"
        
        }
        else {
            alert("enter valid pin")
        }
    }
    else {
        alert("enter amount")
    }

})