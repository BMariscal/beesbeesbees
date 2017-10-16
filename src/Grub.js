var Grub = function() {
  this.age = 0;
  this.color = "pink";
  this.food = "jelly";
};


Grub.prototype.eat = function(){
 return "the " + this.color + " bee eats " + this.food;
};