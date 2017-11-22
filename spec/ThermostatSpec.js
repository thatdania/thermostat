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
  it("#reset should set the temperature back to normal", function(){
    expect(thermostat.reset_temp()).toEqual(20);
  });

  describe('when power saving mode is on', function() {
    it('has a maximum temp of 25 degrees when power mode is on', function() {
      expect(thermostat.up(6)).toEqual("Soz you are at your max temperature");
    });
    it('has a maximum temp of 35 degrees when power mode is off', function() {
    thermostat.savemodeoff();
      expect(thermostat.up(17)).toEqual("Soz you are at your max temperature");
   });
  });


  describe('Thermostat displays unit levels', function(){
    it('temperature is considered low usage', function(){
      thermostat.down(11);
      expect(thermostat.energy_usage()).toEqual("low-usage")
    });
  
    it('tempearture is considered ok usage',function(){
      thermostat.up(10);
      expect(thermostat.energy_usage()).toEqual("high-usage")
    });
  });
});
