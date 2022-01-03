function Player(hp, ap) {
  Needs.call(this);
  Person.call(this);
  Stats.call(this);
  Inventory.call(this);

  this.hp = hp || 100;
  this.ap = ap || 100;
}

Player.prototype = {
  ...Needs.prototype,
  ...Inventory.prototype
}

Player.prototype.time = function() {
  this.getHungry();
  this.getThirst();
  this.getFullBladder();
  this.live();
}

Player.prototype.buy = function(asset, quantity = 1) {
  const totalPrice = asset.price * quantity;
  const canBuy = (this.money - totalPrice) >= 0;

  if (canBuy) {
    this.add(asset, quantity);
    this.money = this.money - totalPrice;
  }
}

Player.prototype.work = function() {
  this.money = this.money + 150;
}