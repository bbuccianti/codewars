const chai = require('chai')
const humanReadable = require('./index')

describe('examples', function () {
  it('should format correctly', function () {
    chai.assert.equal(humanReadable(0), '00:00:00', 'humanReadable(0)')
    chai.assert.equal(humanReadable(5), '00:00:05', 'humanReadable(5)')
    chai.assert.equal(humanReadable(60), '00:01:00', 'humanReadable(60)')
    chai.assert.equal(humanReadable(86399), '23:59:59', 'humanReadable(86399)')
    chai.assert.equal(
      humanReadable(359999),
      '99:59:59',
      'humanReadable(359999)'
    )
  })
})
