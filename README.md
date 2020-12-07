# metalsmith-markdown-remarkable

A Metalsmith plugin to convert markdown files via [Remarkable](https://www.npmjs.com/package/remarkable). Derived from [metalsmith-markdown](https://www.npmjs.com/package/metalsmith-markdown).

[![npm](https://img.shields.io/npm/v/metalsmith-markdown-remarkable.svg)](https://www.npmjs.com/package/metalsmith-markdown-remarkable)

**This repository is [looking for a maintainer](https://github.com/attentif/metalsmith-markdown-remarkable/issues/5).**


## Installation

```
npm install metalsmith-markdown-remarkable
```


### Warning: Remarkable version

If you care about what Remarkable is bundled herein, please note:

- v1.* of this plugin now use Remarkable 1.*
- v2.* use Remarkable 2.*

(Remarkable was originally – and carelessly – upgraded to 2.0 in v1.0.1, now deprecated. Thanks to @jja for the heads-up.)


## CLI usage

Add `metalsmith-markdown-remarkable` to your `metalsmith.json` plugins with any [Remarkable options](https://www.npmjs.com/package/remarkable#options) you want:

```json
{
  "plugins": {
    "metalsmith-markdown-remarkable": {
      "breaks": true,
      "typographer": true,
      "quotes": "«»‘’"
    }
  }
}
```


## Javascript usage

Pass the plugin to Metalsmith via `use()`, optionally setting Remarkable [`preset`](https://www.npmjs.com/package/remarkable#presets) and [`options`](https://www.npmjs.com/package/remarkable#options) (or just the latter):

```js
var markdown = require('metalsmith-markdown-remarkable');

metalsmith.use(markdown('full', {
  breaks: true,
  typographer: true,
  quotes: '«»‘’'
}));
```

### Passing Remarkable plugins

The plugin also defines a `use()` function, which passes whatever you give it to Remarkable's own `use()`:

```js
metalsmith.use(markdown().use(remarkablePlugin));
```

If you have multiple Remarkable plugins, just chain calls:

```js
metalsmith.use(markdown().use(plugin1).use(plugin2));
```


## License

MIT
