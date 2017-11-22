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
});
