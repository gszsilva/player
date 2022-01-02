// function NeedsCap(hungerCap, thirstCap, bladderCap, socialCap, restCap) {
//   this.hungerCap = hungerCap || 100;
//   this.thirstCap = thirstCap || 100;
//   this.bladderCap = bladderCap || 100;
//   this.socialCap = socialCap || 100;
//   this.restCap = restCap || 100;
// }

function Needs(hunger, hungerCap, thirst, bladder, social, rest) {
  // NeedsCap.call(this);
  this.hunger = { value: hunger || 100, cap: hungerCap || 100 };
  this.thirst = thirst || 100;
  this.bladder = bladder || 100;
  this.social = social || 100;
  this.rest = rest || 100;
}


// Needs.prototype.eat = function() {
//   const newValue = this.hunger.value + 10;
  
//   if (newValue <= this.hunger.cap) {
//     this.hunger.value = newValue;
//   } else {
//     this.hunger.value = this.hungerCap;
//   }
// }

// Needs.prototype.getHungry = function() {
//   const newValue = this.hunger - 2;
  
//   if (newValue >= 0) {
//     this.player.hunger = newValue;
//   } else {
//     this.player.hunger = 0;
//   }
// }