var BlinkyDancer = function() {
  Dancer.call(this);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function (timeBetweenSteps) {
  // timeBetweenSteps = 100;
  Dancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};

var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = new BlinkyDancer();
  blinkyDancer.setPosition(top, left);
  blinkyDancer.step(timeBetweenSteps);
  return blinkyDancer;
};