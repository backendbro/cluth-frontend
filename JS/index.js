const eyeOpen = document.getElementById('eye-open')

const balance = document.getElementById("balance")
const usdt_balance_l = document.getElementById("card-usdt-balance")
const usd_balance_l = document.getElementById("card-usd-balance")
      usdt_balance_r = document.getElementById("card-usdt-balance-r"),
      usd_balance_r = document.getElementById("card-usd-balance-r")


eyeOpen.addEventListener('click', function(e) {
    e.preventDefault()
   
    if(eyeOpen.classList.contains("fa-eye")){

        eyeOpen.classList.remove("fa-eye")
        eyeOpen.classList.add('fa-eye-slash');

    
        balance.textContent = "*.**USDT ≈ *.**USD"
        usdt_balance_l.textContent = "*.**USDT"
        usd_balance_l.textContent = "≈ *.**USD"
        
        usdt_balance_r.textContent = "*.**USDT"
        usd_balance_r.textContent = "≈ *.**USD"

    }

   
    else {
        eyeOpen.classList.remove("fa-eye-slash")
        eyeOpen.classList.add('fa-eye');
       
        balance.textContent = "0.00USDT ≈ 0.00USD"
        usdt_balance_l.textContent = "0.00USDT"
        usd_balance_l.textContent = "≈ 0.00USD"

        usdt_balance_r.textContent = "0.00USDT"
        usd_balance_r.textContent = "≈ 0.00USD"
    }



})