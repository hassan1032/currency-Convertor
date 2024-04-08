/*
https://latest.currency-api.pages.dev/v1/currencies/eur.json
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json
   Some Api to check this ----
*/
 
const BASE_URL =
"https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
let fromVal ='USD';
let toVal='INR'
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
for (let select of dropdowns) {
for (currCode in countryList) {
  let newOption = document.createElement("option");
  newOption.innerText = currCode;
  newOption.value = currCode;
  if (select.name === "from" && currCode === "USD") {
    newOption.selected = "selected";
  } else if (select.name === "to" && currCode === "INR") {
    newOption.selected = "selected";
  }
  select.append(newOption);
}

select.addEventListener("change", (evt) => {
    console.log("evt>>>>>>>>>",evt);
    if(evt.target.name === 'from'){
        fromVal= evt.target.value
    }
    if(evt.target.name === 'to'){
        toVal= evt.target.value
    }
  updateFlag(evt.target);
});
}
// fetch(`https://${host}/latest?amount=${amtVal}&from=${fromVal}&to=${toVal}`)
//   .then(resp => resp.json())
//   .then((data) => {
//     console.log(data)
//     //alert(`${amtVal} ${fromVal} = ${data.rates[`${toVal}`]} ${toVal}`);
//   });
const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "") {
        amtVal = 1;
        amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromVal?.toLocaleLowerCase()}.json`; // Assuming you're fetching exchange rates for USD

    try {
        let response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        
        let data = await response.json();
        console.log("data>>>>>>>>>>>>>>", data); // Log the actual data fetched

        let rate = data[fromVal.toLowerCase()][toVal.toLocaleLowerCase()]; // data.usd.inr
        console.log("rate>>>>>>>>>>",rate)
        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromVal} = ${finalAmount} ${toVal}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, show message to user, etc.
    }
};


const updateFlag = (element) => {
let currCode = element.value;
let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src = newSrc;

};

btn.addEventListener("click", (evt) => {
evt.preventDefault();
updateExchangeRate();
});

window.addEventListener("load", () => {
updateExchangeRate();
});
