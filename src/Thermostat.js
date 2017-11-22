'use strict';

function Thermostat(){
  this.starting_temperature = 20;
  this.on = true;
  this.off = false;
}

Thermostat.prototype.up = function(number) {
  return this.starting_temperature + number;
};

Thermostat.prototype.down = function(number){
  if (this.starting_temperature - number < 10) {
   return "Sorry, you'll die"
  } else {
   return this.starting_temperature - number;
 };
};

Thermostat.prototype.powermodeon = function(){
  return this.on;
};

Thermostat.prototype.powermodeoff = function(){
  return this.off;
};
