// Creates and returns a new dancer object that can step

var Dancer = function() {
  this.$node = $('<span class="dancer"></span>');
};

Dancer.prototype.step = function(top, left, timeBetweenSteps) {
  setTimeout(this.step.bind(this), timeBetweenSteps);

};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


var makeDancer = function(top, left, timeBetweenSteps) {
  var dancer = new Dancer();
  dancer.setPosition(top, left);

  return dancer;
};