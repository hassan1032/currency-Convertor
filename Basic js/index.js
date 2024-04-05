
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

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
 