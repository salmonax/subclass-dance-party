var BouncyDancer = function() {
  Dancer.call(this);
  this.$node = $('<span class="bouncyDancer"></span>');
  this.$parent = null;
  this.maxX = null;
  this.maxY = null;
  this.hasParent = false;
  this.xDirection = 1;
  this.yDirection = 1;
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function (timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this._move();
};

BouncyDancer.prototype._move = function() {
  this.hasParent = this.hasParent || this.$node.parent().length;
  if (this.hasParent) {
    this.$parent = this.$parent || $(this.$node.parent());
    this.maxY = this.maxY || this.$parent.height(); 
    this.maxX = this.maxX || this.$parent.width();
    var top = parseInt(this.$node.css('top'));
    var left = parseInt(this.$node.css('left'));
    if (top === this.maxY) { 
      this.yDirection = -1;
    } else if (top === 0) {
      this.yDirection = 1;
    }
    if (left === this.maxX) {
      this.xDirection = -1;
    } else if (left === 0) {
      this.xDirection = 1;
    }


    top += this.yDirection;
    left += this.xDirection;
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};

BouncyDancer.prototype.randomScale = function() {
   //to implement later
  var styleSettings = {
    transform: scale(2, 2),
  };
  this.$node.css(styleSettings);
};


var makeBouncyDancer = function (top, left, timeBetweenSteps) {
  var bouncyDancer = new BouncyDancer();
  bouncyDancer.setPosition(top, left);
  bouncyDancer.step(timeBetweenSteps);
  return bouncyDancer;
};







