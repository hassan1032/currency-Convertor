/*https://2024-03-06.currency-api.pages.dev/v1/currencies/eur.json
https://latest.currency-api.pages.dev/v1/currencies/eur.json
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json
   Some Api to check this ----
*/
const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns){
    for (currCode in countryList){
       let newoption = document.createElement("option") 
        newoption.innerText = currCode
        newoption.value= currCode;
        select.append(newoption)
        console.log(currCode,countryList[currCode]);
    }
}
 