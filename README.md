# @mrnkr/regex_t

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

[npm-image]:http://img.shields.io/npm/v/@mrnkr/regex_t.svg
[npm-url]:https://npmjs.org/package/@mrnkr/regex_t
[downloads-image]:http://img.shields.io/npm/dm/@mrnkr/regex_t.svg

Make regex evaluation great again!

### Motivation

I've been having problems with regex evaluation in js... Correct expressions that match what I want them to match in [Regex Tester](https://www.regextester.com/) do not give me reliable results. After countless bug reports for the same problem I removed that validation from the app (not a deal breaker) but I was left wondering whether there would be a solution that actually worked...

A couple of days ago, talking to a friend, I remembered [WebAssembly](https://webassembly.org/). I thought I could bring the C library for regex evaluation `<regex.h>` to javascript, both in the server and the frontend. That's what this library is.

I expect to add features to this as I need them but feel free to contribute, offer feedback and/or ask for features!

### Installation

```zsh
yarn add @mrnkr/regex_t
```

### Quick start

```js
import regex_t from '@mrnkr/regex_t'; // has both default and named export so choose the one you like best :)

const regex = new regex_t('^09[1-9]\\s[0-9]{3}\\s[0-9]{3}$'); // This regex validates an uruguayan cell phone number
regex.match('099 123 456')
    .then(isMatch => console.log(`It ${isMatch ? 'is' : 'is not'} a match!`));
```

### Changelog

* 0.1.0 - First release, pretty barebones but a proof of concept nonetheless
* 0.1.1 - Never can I just release, I always have to forget something... There was an unused dependency in the first version...
