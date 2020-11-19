function temperatureConverterForCelcius(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputFahrenheit').value = ((valNum*1.8)+32).toFixed(2);
    document.getElementById('inputKelvin').value = (valNum+273.15).toFixed(2);
}

function temperatureConverterForFahrenheit(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputCelcius').value = ((valNum-32)/1.8).toFixed(2);
    document.getElementById('inputKelvin').value = (((valNum-32)/1.8)+273.15).toFixed(2);
}

function temperatureConverterForKelvin(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputCelcius').value = (valNum-273.15).toFixed(2);
    document.getElementById('inputFahrenheit').value = (((valNum-273.15)*1.8)+32).toFixed(2);
}