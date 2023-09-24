let apiURL = 'https://cors-anywhere.herokuapp.com/https://v6.exchangerate-api.com/v6/d0f23fda988537aea298cd57/latest/USD';

// let apiURL = 'https://v6.exchangerate-api.com/v6/d0f23fda988537aea298cd57/latest/USD' //api url
// initializing variables
const fromDropDown = document.querySelector("#from-currency-select");
const toDropDown = document.querySelector("#to-currency-select");


// array holding currency codes
currencies = [
    {name: "United Arab Emirates", currency: "AED"},
    {name: "Afghanistan", currency:  "AFN"},
    {name: "Albania", currency: "ALL"},
    {name: "Armenia", currency: "AMD"},
    {name: "Netherlands Antilles", currency: "ANG"},
    {name:"Angola" , currency: "AOA"},
    {name: "Argentina", currency: "ARS"},
    {name: "Australia", currency: "AUD"},
    {name: "Aruba", currency: "AWG"},
    {name: "Azerbaijan", currency: "AZN"},
    {name: "Bosnia and Herzegovina Mark", currency: "BAM"},
    {name: "Barbados Dollar", currency: "BBD"},
    {name: "Bangladeshi Taka", currency: "BDT" },
    {name: "Bulgarian Lev", currency: "BGN" },
    {name: "Bahraini Dinar", currency: "BHD	"},
    {name: "Burundi", currency: "BIF"},
    {name: "Bermuda", currency: "BMD"},
    {name: "Brunei", currency: "BND"},
    {name: "Bolivia", currency: "BOB"},
    {name: "Brazil", currency: "BRL"},
    {name: "Bahamas", currency: "BSD"},
    {name: "Bhutan", currency: "BTN"},
    {name: "Botswana", currency: "BWP"},
    {name: "Belarus", currency: "BYN"},
    {name: "Belize", currency: "BZD"},
    {name: "Canada", currency: "CAD"},
    {name: "Democratic Republic of the Congo", currency: "CDF"},
    {name: "Switzerland", currency: "CHF"},
    {name: "Chile", currency: "CLP	"},
    {name: "China", currency: "CNY"},
    {name: "Colombia", currency: "COP"},
    {name: "Costa Rica", currency: "CRC"},
    {name: "Cuba", currency: "CUP"},
    {name: "Cape Verde", currency: "CVE"},
    {name: "Czech Republic", currency: "CZK"},
    {name: "Denmark", currency: "DKK"},
    {name: "Dominican Republic", currency: "DOP"},
    {name: "Algeria", currency: "DZD"},
    {name: "Egypt", currency: "EGP"},
    {name: "Eritrea", currency: "ERN"},
    {name: "Ethiopia", currency: "ETB"},
    {name: "European Union", currency: "EUR"},
    {name: "Fiji", currency: "FJD"},
    {name: "United Kingdom", currency: "GBP"},
    {name: "Georgia", currency: "GEL"},
    {name: "Ghana", currency: "GHS"},
    {name: "Guinea", currency: "GNF"},
    {name: "Guatemala", currency: "GTQ"},
    {name: "Hong Kong", currency: "HKD"},
    {name: "Honduras", currency: "HNL"},
    {name: "Croatia", currency: "HRK"},
    {name: "Haiti", currency: "HTG"},
    {name: "Hungary", currency: "HUF"},
    {name: "Indonesia", currency: "IDR"},
    {name: "Israel", currency: "ILS"},
    {name: "India", currency: "INR"},
    {name: "Iraq", currency: "IQD"},
    {name: "Iran", currency: "IRR"},
    {name: "Iceland", currency: "ISK"},
    {name: "Jersey", currency: "JEP"},
    {name: "Jamaica", currency: "JMD"},
    {name: "Jordan", currency: "JOD"},
    {name: "Japan", currency: "JPY"},
    {name: "Kenya", currency: "KES"},
    {name: "Kyrgyzstan", currency: "KGS"},
    {name: "Cambodia", currency: "KHR"},
    {name: "Kiribati", currency: "KID"},
    {name: "Comoros", currency: "KMF"},
    {name: "South Korea", currency: "KRW"},
    {name: "Kuwait", currency: "KWD"},
    {name: "Lebanon", currency: "LBP"},
    {name: "Sri Lanka", currency: "LKR"},
    {name: "Liberia", currency: "LRD"},
    {name: "Libya", currency: "LYD"},
    {name: "Morocco", currency: "MAD"},
    {name: "Moldova", currency: "MDL"},
    {name: "Madagascar", currency: "MGA"},
    {name: "Mongolia", currency: "MNT"},
    {name: "Malawi", currency: "MWK"},
    {name: "Mexico", currency: "MXN"},
    {name: "Malaysia", currency: "MYR"},
    {name: "Mozambique", currency: "MZN"},
    {name: "Namibia", currency: "NAD"},
    {name: "Nigeria", currency: "NGN"},
    {name: "Nicaragua", currency: "NIO"},
    {name: "Norway", currency: "NOK"},
    {name: "Nepal", currency: "NPR"},
    {name: "New Zealand", currency: "NZD"},
    {name: "Oman", currency: "OMR"},
    {name: "Panama", currency: "PAB"},
    {name: "Peru", currency: "PEN"},
    {name: "Philippines", currency: "PHP"},
    {name: "Pakistan", currency: "PKR"},
    {name: "Poland", currency: "PLN"},
    {name: "Paraguay", currency: "PYG"},
    {name: "Qatar", currency: "QAR"},
    {name: "Romania", currency: "RON"},
    {name: "Serbia", currency: "RSD"},
    {name: "Russia", currency: "RUB"},
    {name: "Rwanda", currency: "RWF"},
    {name: "Saudi Arabia", currency: "SAR"},
    {name: "Sudan", currency: "SDG"},
    {name: "Sweden", currency: "SEK"},
    {name: "Singapore", currency: "SGD"},
    {name: "Sierra Leone", currency: "SLE"},
    {name: "Somalia", currency: "SOS"},
    {name: "Syria", currency: "SYP"},
    {name: "Thailand", currency: "THB"},
    {name: "Tunisia", currency: "TND"},
    {name: "Turkey", currency: "TRY"},
    {name: "Taiwan", currency: "TWD"},
    {name: "Ukraine", currency: "UAH"},
    {name: "Uganda", currency: "UGX"},
    {name: "United States", currency: "USD"},
    {name: "Uruguay", currency: "UYU"},
    {name: "Venezuela", currency: "VES"},
    {name: "Vietnam", currency: "VND"},
    {name: "Vanuatu", currency: "VUV"},
    {name: "Samoa", currency: "WST"},
    {name: "Yemen", currency: "YER"},
    {name: "South Africa", currency: "ZAR"},
    {name: "Zambia", currency: "ZMW"},
    {name: "Zimbabwe", currency: "ZWL"},
];

// Adding options to From Currency Dropdown Menu
for (var i = 0; i < currencies.length; i++) {
    var option = document.createElement("option");
    option.text = currencies[i].name;
    option.value = currencies[i].currency;
    fromDropDown.add(option);
};

// Adding options for To Currency Dropdown Menu
for (var i = 0; i < currencies.length; i++) {
    var option = document.createElement("option");
    option.text = currencies[i].name;
    option.value = currencies[i].currency;
    toDropDown.add(option);
};

// Default values
fromDropDown.value = "USD";
toDropDown.value = "INR";

// const result = document.querySelector("#result");  megan added this whilst playing around

// Function to convert exchange rate
let convertCurrency = () => {
	const amount = document.querySelector("#amount").value; // references amount
	const fromCurrency = fromDropDown.value; // gets value of from dropdown menu
	const toCurrency = toDropDown.value; // gets value of to dropdown menu

	//If amount input field is not empty
	if (amount.length != 0) {
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject("Network Response was not good");
                    // throw new Error("Need to be fixed");
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                let fromExchangeRate = data.conversion_rates[fromCurrency]; // variable to hold rate of user selection of From Dropdown menu
                let toExchangeRate = data.conversion_rates[toCurrency]; // variable to hold rate of user selection of To Dropdown Menu
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate; // variable that holds formula to calculate converted amount
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;; // display converted amount in html
            })
            .catch( 
                error => console.error("Error", error)
            );
    }
  };

document
	.querySelector("#convert-button")
	.addEventListener("click", convertCurrency);
