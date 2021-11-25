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
});

// const thermostat = new Thermostat();

// thermostat.getTemperature(); // should return 20

// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22
