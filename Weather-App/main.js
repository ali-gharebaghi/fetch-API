const addCity = document.getElementById('add')
const cityInput = document.getElementById('cityInput')
const cityName = document.getElementById('cityoutput')
const description = document.getElementById('description')
const tempoutput = document.getElementById('temp')
const windOutput = document.getElementById('wind')
const apiKey = "847b653d1c1afc6bfc98cf90d8815432"

async function getweather() {
  const result = await (
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)).json();
  // console.log(result)
  if (result.name === undefined) {
    alert("لطفا نام شهر را به درستی وارد کنید!")
  } else {
    weatherResult(result)
  }
}

function weatherResult(data) {
  cityName.innerHTML = `City Name: ${data.name}`
  description.innerHTML = `Description: ${data['weather'][0]['description']}`
  tempoutput.innerHTML = `Temperature: ${convert(data.main.temp)} C`
  windOutput.innerHTML = `Wind Speed: ${data.wind.speed}`

}

const convert = (value) => {
  return (value - 273).toFixed(1)
}



addCity.addEventListener('click', getweather)