'use strict';

function Thermostat(){
  this.temperature = 20;
  this.on = true;
  this.off = false;
  this.powerSaveMode = true;
  this.maxsavemode = 25;
  this.maxnonsavemode = 32;


}

Thermostat.prototype.savemodeon = function(){
  return this.powerSaveMode = true;
};

Thermostat.prototype.savemodeoff = function(){
  return this.powerSaveMode = false;
};

Thermostat.prototype.up = function(number) {
  var result = this.temperature + number;
   if(this.powerSaveMode === true && result > this.maxsavemode){
    return "Soz you are at your max temperature"
   }
   else if(this.powerSaveMode === false && result > this.maxnonsavemode){
    return "Soz you are at your max temperature"
   }
   else {
     return result;
   }
};

Thermostat.prototype.down = function(number){
  if (this.temperature - number < 10) {
   return "Sorry, you'll die"
  } else {
   return this.temperature - number;
 };
};

Thermostat.prototype.reset_temp = function(){
  return this.temperature = 20;
};
