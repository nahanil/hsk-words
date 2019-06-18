const path = require('path');
const cnchars = require('cn-chars');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(null, null, null, {
  dialect: 'sqlite',
  storage: path.join(__dirname, './db/hsk-words.sqlite'),
  logging: false
});

const Word = sequelize.define('Word', {
  level: Sequelize.INTEGER,
  simplified: Sequelize.STRING,
  pronunciation: Sequelize.STRING,
  definitions: Sequelize.STRING
});

module.exports.findLevel = async function (word){
  // handle traditional characters
  let simplified = word.slice().split('');
  for (let i = 0; i < word.length; i++){
    simplified[i] = cnchars.toSimplifiedChar(word[i]);
  }
  simplified = simplified.join('');

  let found = await Word.findOne({ where: { simplified } })
  return found ? found.level : -1
};

module.exports.getWordList = async function (level) {
  if ((!level || parseInt(level) < 1 || parseInt(level) > 6) && level !== '%') {
    return null;
  }

  return await Word.findAll({
    where: { level: { [Sequelize.Op.like]: level } },
    attributes: ['level', 'simplified', 'pronunciation', 'definitions'],
    raw: true
  })
}
