function Needs(hunger, hungerCap, thirst, thirstCap, bladder, bladderCap, social, socialCap, rest, restCap, fun, funCap) {

  this.needs = {
    hunger: { value: hunger || 100, cap: hungerCap || 100 },
    thirst: { value: thirst || 100, cap: thirstCap || 100 },
    bladder: { value: bladder || 100, cap: bladderCap || 100 },
    social: { value: social || 100, cap: socialCap || 100 },
    rest: { value: rest || 100, cap: restCap || 100 },
    fun: { value: fun || 100, cap: funCap || 100 }
  }
  // this.hunger = { value: hunger || 100, cap: hungerCap || 100 };
  // this.thirst = { value: thirst || 100, cap: thirstCap || 100 };
  // this.bladder = { value: bladder || 100, cap: bladderCap || 100 };
  // this.social = { value: social || 100, cap: socialCap || 100 };
  // this.rest = { value: rest || 100, cap: restCap || 100 };
  // this.fun = { value: fun || 100, cap: funCap || 100 };
}

Needs.prototype.eat = function(value = 10) {
  const newValue = this.needs.hunger.value + value;

  if (newValue <= this.needs.hunger.cap) {
    this.needs.hunger.value = newValue;
  } else {
    this.needs.hunger.value = this.needs.hunger.cap;
  }
}

Needs.prototype.getHungry = function(value = 2) {
  const newValue = this.needs.hunger.value - value;

  if (newValue < 0) {
    this.needs.hunger.value = 0;
  } else {
    this.needs.hunger.value = newValue;
  }
}

Needs.prototype.drink = function(value = 10) {
  const newValue = this.needs.thirst.value + value;

  if (newValue <= this.needs.thirst.cap) {
    this.needs.thirst.value = newValue;
  } else {
    this.needs.thirst.value = this.needs.thirst.cap;
  }
}

Needs.prototype.getThirst = function(value = 2) {
  const newValue = this.needs.thirst.value - value;

  if (newValue < 0) {
    this.needs.thirst.value = 0;
  } else {
    this.needs.thirst.value = newValue;
  }
}

Needs.prototype.piss = function(value = 70) {
  const newValue = this.needs.bladder.value + value;

  if (newValue <= this.needs.bladder.cap) {
    this.needs.bladder.value = newValue;
  } else {
    this.needs.bladder.value = this.needs.bladder.cap;
  }
}

Needs.prototype.getFullBladder = function(value = 2) {
  const newValue = this.needs.bladder.value - value;

  if (newValue < 0) {
    this.needs.bladder.value = 0;
  } else {
    this.needs.bladder.value = newValue;
  }
}

Needs.prototype.getRested = function(value = 70) {
  const newValue = this.needs.rest.value + value;

  if (newValue <= this.needs.rest.cap) {
    this.needs.rest.value = newValue;
  } else {
    this.needs.rest.value = this.needs.rest.cap;
  }
}

Needs.prototype.live = function(value = 2) {
  const newValue = this.needs.rest.value - value;

  if (newValue < 0) {
    this.needs.rest.value = 0;
  } else {
    this.needs.rest.value = newValue;
  }
}