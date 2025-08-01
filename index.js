function converttoCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = converttoCelsius(fahrenheit);

  let description = "";

  if (celsius < 0) {
    description = "very cold";
  } else if (celsius < 20) {
    description = "cold";
  } else if (celsius < 30) {
    description = "warm";
  } else if (celsius < 40) {
    description = "hot";
  } else if (celsius >= 40) {
    description = "very hot";
  }

  return `${fahrenheit}°F is ${celsius}°C, which is considered ${description}.`;
}

const fahrenheit = prompt("Enter temperature in Fahrenheit:");
const description = describeTemperature(fahrenheit);
alert(description);
