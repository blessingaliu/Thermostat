const Thermostat = require("./thermostat");

describe("Thermostat class", () => {
  it("Create Thermostat class and get temperature", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("Increase temperature using up method", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.up()).toEqual;
  });
});

// const thermostat = new Thermostat();

// thermostat.getTemperature(); // should return 20

// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22
