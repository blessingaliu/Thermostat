class Thermostat {
  constructor(temperature = 20) {
    this.temperature = temperature;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    return this.temperature += 1
  }

  down() {
    return this.temperature -= 1
  }
}

module.exports = Thermostat;
