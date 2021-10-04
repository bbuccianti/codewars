const chai = require('chai')
const topThreeWords = require('./index')

describe('Tests', () => {
  it('test', () => {
    chai.assert.deepEqual(topThreeWords('a a a  b  c c  d d d d  e e e e e'), [
      'e',
      'd',
      'a'
    ])

    chai.assert.deepEqual(topThreeWords('a a c b b'), ['a', 'b', 'c'])

    chai.assert.deepEqual(
      topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e'),
      ['e', 'ddd', 'aa']
    )

    chai.assert.deepEqual(topThreeWords("  //wont won't won't "), [
      "won't",
      'wont'
    ])

    chai.assert.deepEqual(topThreeWords('  , e   .. '), ['e'])

    chai.assert.deepEqual(topThreeWords('  ...  '), [])

    chai.assert.deepEqual(topThreeWords("  '  "), [])

    chai.assert.deepEqual(
      topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`),
      ['a', 'of', 'on']
    )
  })
})
