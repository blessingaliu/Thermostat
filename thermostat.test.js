const Thermostat = require("./thermostat");

describe("Thermostat class", () => {
  it("Create Thermostat class and get temperature", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("Increase temperature using up method", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  });

  it("Decrease temperature using down method", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(18);
  });

  it("Does not increase over 25 when power saving is active", () => {
    const thermostat = new Thermostat();
    for (i = 0; i<50; i++) {
      thermostat.up()
    }
    expect(thermostat.getTemperature()).toEqual(25);
  })
});

// thermostat.setPowerSavingMode(true); // PSM is now on, 
// max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }