export const FahrenheitToCelsius = (fahrenheitTemperature) => {
  return Number((((fahrenheitTemperature - 32) * 5) / 9).toFixed(2));
};
