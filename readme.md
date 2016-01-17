# capitalize [![Build Status](https://travis-ci.org/emiljohansson/capitalize.svg?branch=master)](https://travis-ci.org/emiljohansson/capitalize)

> Capitalize each word in a string or array.

## Usage

```js
var capitalize = require('capitalize');
capitalize('Grumpy wizards make toxic brew for the evil Queen and Jack.');
// => 'Grumpy Wizards Make Toxic Brew For The Evil Queen And Jack.'
capitalize(["Grumpy", "wizards", "make", "toxic", "brew", "for", "the", "evil", "Queen", "and", "Jack."]);
// => ["Grumpy", "Wizards", "Make", "Toxic", "Brew", "For", "The", "Evil", "Queen", "And", "Jack."]
```

## API

### capitalize(words)

Returns the modified string or array.

#### words

Type: `string || Array`

The string or array to modify.

## License

MIT © [Emil Johansson](http://emiljohansson.se)
