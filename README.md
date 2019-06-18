# hsk-words [![Build Status](https://travis-ci.org/nahanil/hsk-words.svg)](https://travis-ci.org/nahanil/hsk-words)

hsk-words is a "batteries-included" library for querying the Chinese Government's HSK (汉语水平考试) word list. This is a test used for university admission for foreigners in the PRC and includes 5,000 words in the list across all 6 levels.

Supports lookup by both traditional and simplified characters.

This is mostly based off John Heroy's [hsk-words](https://www.npmjs.com/package/hsk-words)

## Usage

```
var hsk = require('hsk-words');

let level = await hsk.findLevel('学习')
// -1 if not found, otherwise 1-6

// Get a list of the words at a given HSK level
let l3 = await hsk.getWordList(3)
// [ { level: 1, simplified: '学习', pinyin: 'xue2 xi2', definitions: 'to learn; to study' } ]

```

## License

MIT
