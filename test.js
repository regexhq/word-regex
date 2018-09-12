'use strict';

require('mocha');
var assert = require('assert');
var wordRegex = require('./');

function match(str) {
  return str.match(wordRegex());
}

function wordcount(str) {
  var m = match(str);
  return m ? m.length : 0;
}

describe('wordRegex', function () {
  it('should match words in a string:', function () {
    assert.deepEqual(match('foo bar baz'), ['foo', 'bar', 'baz']);
    assert.deepEqual(match('foo baz'), ['foo', 'baz']);
  });

  it('should count the words in a string.', function () {
    assert.strictEqual(wordcount('Count the words in string.'), 5);
    assert.strictEqual(wordcount('Count the words in string, again.'), 6);
  });

  it('should count contractions in a string as one word.', function () {
    assert.strictEqual(wordcount('You can\'t count contractions as two words.'), 7);
  });

  it('should count the words in a cyrillic string.', function () {
    assert.strictEqual(wordcount('Тест стринг кирилица.'), 3)
  });

  it('should count the words in mixed latin and cyrillic string', function () {
    assert.strictEqual(wordcount('Тест mixed стринг кирилица and latin string.'), 7)
  });

  it('should count the words in mixed chinese (traditional) and latin string', function () {
    assert.strictEqual(wordcount('We are 我們是 朋友 from Bulgaria'), 6);
  });

  it('should count the words in korean-latin-cyrillic string', function () {
    assert.strictEqual(wordcount('I am from България, and speak 한국어 언어'), 8);
  });

  it('should count the words in swedish string', function() {
    assert.strictEqual(wordcount('Island is ö, stream is å and then we have ä. ÅÄÖ!'), 12);
  })

  it('should count the words in armenian string with apostrophe', function() {
    assert.strictEqual(wordcount('Լինում է, չի լինում մի խեղճ մարդանունը Նազար: Էս Նազարը մի անշնորհք ու ալարկոտ մարդ է լինում: Էնքան էլ վախկոտ, էնքան էլ վախկոտ, որ մենակ ոտը ոտի առաջ չէր դնիլ, թեկուզ սպանեիր: Օրը մինչև իրիկուն կնկա կողքը կտրած նրա հետ էր դուրս գնալիս դուրս էր գնում, տուն գալիս` տուն գալի: Դրա համար էլ անունը դնում են վախկոտ Նազար: Ժաննա դ՚Արկ'), 60);
  })
});
