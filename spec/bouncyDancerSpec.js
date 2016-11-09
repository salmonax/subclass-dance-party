describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;
  var fakeNode;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = makeBouncyDancer(10, 20, timeBetweenSteps);
    // console.log("??",jQuery('whatever'));
    fakeNode = sinon.stub(bouncyDancer.$node, 'parent', function() {
      return $('body');
    });

  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should bounce when it hits an edge', function() {
    var beforeX = bouncyDancer.xDirection;
    var beforeY = bouncyDancer.yDirection;
    var maxWidth = $(bouncyDancer.$node.parent()).width();
    var maxHeight = $(bouncyDancer.$node.parent()).height();
    
    bouncyDancer.setPosition(maxHeight - 1, maxWidth - 1);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);

    var afterX = bouncyDancer.xDirection;
    var afterY = bouncyDancer.yDirection;

    expect(beforeX + afterX).to.be.equal(0);
    expect(beforeY + afterY).to.be.equal(0);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      fakeNode.restore();
      sinon.spy(bouncyDancer, 'step');
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });
  });
});
