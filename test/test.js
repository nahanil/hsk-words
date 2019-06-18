var assert = require('assert')
var hsk = require('../index')

describe('Search HSK list', function () {
  describe('findLevel()', function () {

    it('should find the correct levels for words', async function (done) {
      let level = await hsk.findLevel('世界')
      assert.equal(level, 3)
      done()
    })

    it('should return -1 for words not in the list', async function (done) {
      let level = await hsk.findLevel('你好')
      assert.equal(level, -1)
      done()
    })

  })

  describe('getWordList()', function(){
    it('should return null for an invalid HSK level', async function (done) {
      let words = await hsk.getWordList(7)
      assert.equal(words, null)
      done()
    })

    it('should return a list of HSK words given a valid HSK level (1-6)', async function (done) {
      let words = await hsk.getWordList(1)
      assert.equal(words.length, 148)
      done()
    })
  })
})
