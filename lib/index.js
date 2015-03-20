var debug = require('debug')('metalsmith-markdown-remarkable'),
    path = require('path'),
    Remarkable = require('remarkable'),
    inspect = require('util').inspect;

module.exports = plugin;

/**
 * metalsmith plugin to convert markdown files via Remarkable.
 *
 * @param {String} Remarkable preset (optional)
 * @param {Object} Remarkable options (optional)
 * @return {Function}
 */
function plugin(preset, options) {
  debug('plugin initialized with preset %s, options %s', inspect(preset), inspect(options));
  var md = new Remarkable(preset, options);

  return function (files, metalsmith, done) {
    Object.keys(files).forEach(function (file) {
      debug('checking file: %s', file);
      if (! isMarkdown(file)) {
        return;
      }

      var data = files[file],
          dirName = path.dirname(file),
          htmlName = path.basename(file, path.extname(file)) + '.html';
      if (dirName !== '.') {
        htmlName = dirName + '/' + htmlName;
      }

      debug('converting file: %s', file);
      var str = md.render(data.contents.toString());
      data.contents = new Buffer(str);

      delete files[file];
      files[htmlName] = data;
    });
    done();
  };
}

/**
 * Checks if a `file` is markdown.
 *
 * @param {String} file
 * @return {Boolean}
 */
function isMarkdown(file){
  return /\.md|\.markdown/.test(path.extname(file));
}
