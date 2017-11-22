'use strict';

describe('Thermostat', function() {

  var thermostat ;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('Thermostat starts at 20', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('#up increase the thermostat temperature',function(){
    thermostat.savemodeoff();
    expect(thermostat.up(10)).toEqual(30);
  });

  it("#down decrease the thermostat temperature",function(){
    expect(thermostat.down(10)).toEqual(10);
  });

  it("#down temperature cannot be lower than 10 degress", function(){
    expect(thermostat.down(20)).toEqual("Sorry, you'll die");
  });

  it("#powersavemodeon is true as its on", function(){
    expect(thermostat.savemodeon()).toBe(true);
  });
  it("#powersavemode off is false as its off", function(){
    expect(thermostat.savemodeoff()).toBe(false);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temperature of 25 degrees', function() {

      expect(thermostat.up(6)).toEqual("Soz you are at your max temperature");
    });
  });
});
