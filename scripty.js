
const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".dolar-euro-select")



function convertValues() {

   const inputValor = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".real-br")
   const currencyValueConverted = document.querySelector(".dolar-americano")



   const DolarToday = 5.16
   const EuroToday = 5.94
   const LibraToday = 6.80



   if (currencySelect.value == "dolar") {

      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputValor / DolarToday)
   }

   if (currencySelect.value == "euro") {

      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR",
      }).format(inputValor / EuroToday)
   }

   if (currencySelect.value == "libra") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
         style: "currency",
         currency: "GBP",
      }).format(inputValor / LibraToday)
   }

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
   }).format(inputValor)
}

function changeCurrency() { 
   const currencyName = document.getElementById("dolar-ameicano")
const currencyImage = document.querySelector(".currency-img")
  


  if (currencySelect.value == "dolar") {
   currencyName.innerHTML = "Dólar americano"
   currencyImage.src = "./img/estados-unidos (1) 1.png"
  

}

 if (currencySelect.value == "euro") {
   currencyName.innerHTML = "Euro"
   currencyImage.src = "./img/euro.png"

}

 if (currencySelect.value == "libra") {
   currencyName.innerHTML = "Libra"
   currencyImage.src = "./img/libra 1.png"

}

convertValues()

}


currencySelect.addEventListener("change",changeCurrency)
//select      ouvinte      evento    função a ser executada
convertButton.addEventListener("click", convertValues)

