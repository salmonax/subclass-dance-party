describe('hoppyDancer', function() {

  var hoppyDancer, clock;
  var timeBetweenSteps = 100;
  var fakeNode;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hoppyDancer = makeHoppyDancer(10, 20, timeBetweenSteps);
    // console.log("??",jQuery('whatever'));
    fakeNode = sinon.stub(hoppyDancer.$node, 'parent', function() {
      return $('body');
    });

  });

  it('should have a jQuery $node object', function() {
    expect(hoppyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should define a maxY and minY for hopping', function() {
    expect(hoppyDancer.minY).to.be.equal(0);
    expect(hoppyDancer.maxY).to.be.equal(0);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      fakeNode.restore();
      sinon.spy(hoppyDancer, 'step');
      expect(hoppyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(hoppyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hoppyDancer.step.callCount).to.be.equal(2);
    });
  });
});
