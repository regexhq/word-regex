# word-regex [![NPM version](https://badge.fury.io/js/word-regex.svg)](http://badge.fury.io/js/word-regex)

> Regular expression for matching words in a string. Support for english, CJK and Cyrillic.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i word-regex --save
```

## Usage

```js
var regex = require('word-regex')();

regex.match('match words.');
//=> ['match', 'words']
regex.match('match words, again.');
//=> ['match', 'words', 'again']
```

## Related projects

* [copyright-regex](https://www.npmjs.com/package/copyright-regex): Regex for matching and parsing copyright statements. | [homepage](https://github.com/regexps/copyright-regex)
* [is-equal-regex](https://www.npmjs.com/package/is-equal-regex): Returns true if regular expression A is equal to regex B. Compares the expression and… [more](https://www.npmjs.com/package/is-equal-regex) | [homepage](https://github.com/jonschlinkert/is-equal-regex)
* [todo-regex](https://www.npmjs.com/package/todo-regex): Regular expression for matching TODO statements in a string. | [homepage](https://github.com/regexps/todo-regex)
* [whitespace-regex](https://www.npmjs.com/package/whitespace-regex): Regular expression for matching the whitespace in a string. | [homepage](https://github.com/regexps/whitespace-regex)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/regexps/word-regex/issues/new).

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 22, 2015._