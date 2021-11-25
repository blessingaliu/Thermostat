class Thermostat {
  constructor(temperature = 20) {
    this.temperature = temperature;
    this.powerSavingMode = true
  }
  maxTemp() {
    if (this.powerSavingMode === true) return 25;
    return 32
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemp()) this.temperature += 1
  }

  down() {
    return this.temperature -= 1
  }
}

module.exports = Thermostat;
