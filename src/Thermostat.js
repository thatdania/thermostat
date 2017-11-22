'use strict';

function Thermostat(){
  this.starting_temperature = 20;
}

Thermostat.prototype.up = function(number) {
  return this.starting_temperature + number;
};
