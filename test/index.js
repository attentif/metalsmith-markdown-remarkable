/* global describe, it */

var assertDirEqual = require('assert-dir-equal'),
    metalsmith = require('metalsmith'),
    markdown = require('..');

describe('metalsmith-markdown-remarkable', function () {

  it('should convert markdown files, passing Remarkable preset and options', function (done) {
    metalsmith('test/fixtures/basic')
      .use(markdown('full', {
        html: true,
        langPrefix: '',
        typographer: true,
        linkify: true
      }))
      .build(function (err) {
        if (err) { return done(err); }
        assertDirEqual('test/fixtures/basic/expected', 'test/fixtures/basic/build');
        done();
      });
  });

});
