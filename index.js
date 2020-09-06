async function getExchangeRates() {    
    let response = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`, { method: 'GET' });
    let exchangeRatesApi = await response.json();
    return exchangeRatesApi;
}


async function makeSelect() {
    let exchangeRatesApi = await getExchangeRates();
    for(key in exchangeRatesApi.Valute){
        let option = document.createElement('option');
        option.setAttribute('class','select_item');
        option.innerHTML=key;
        document.querySelector('.select_menu').appendChild(option);
    }
}

async function outputExchangeRates(currency){    
    let exchangeRatesApi = await getExchangeRates();
    document.querySelector('.exchange_rate').innerHTML='';
    for(key in exchangeRatesApi.Valute){
        if(currency == key){
            document.querySelector(".exchange_rate").innerHTML =
                `Курс ${key}/RUB на 
                ${formatDate(new Date(Date.parse(exchangeRatesApi.Date)))}: ` +
                exchangeRatesApi.Valute[key].Value;
        }
    }
}

function formatDate(date) {    
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }

document.querySelector('.btn-invest').addEventListener('click', makeSelect());
document.querySelector('.select_menu').addEventListener('change', (event)=>{
    outputExchangeRates(event.target.value);    
});
