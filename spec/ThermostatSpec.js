'use strict';

describe('Thermostat', function() {

  var thermostat ;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20', function() {
    expect(thermostat.starting_temperature).toEqual(20);
  });

  it('#up increase the thermostat temperature',function(){
    expect(thermostat.up(10)).toEqual(30);
  });

  it("#down decrease the thermostat temperature",function(){
    expect(thermostat.down(10)).toEqual(10);
  });

  it("#down temperature cannot be lower than 10 degress", function(){
    expect(thermostat.down(20)).toEqual("Sorry, you'll die");
  });

  it("#powermodeon is true as its on", function(){
    expect(thermostat.powermodeon()).toBe(true);
  });
  it("#powermode off is false as its off", function(){
    expect(thermostat.powermodeoff()).toBe(false);
  });

});
