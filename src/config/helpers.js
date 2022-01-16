const getEntries = () => {
  const path = require('path');
  const glob = require('glob');
  const paths = require('./paths');

  const js = glob.sync(paths.jsSourceEntries).reduce((acc, uri) => {
    const entry = path.parse(uri).name;
    console.log('uri' , uri);
    console.log('ENTRY' , entry);
    /**
     * Here we start building our object by placing the "entry" variable from
     * the previous line as a key and the entire path including the file name
     * as the value
     */
    acc[entry] = uri;
    return acc;
  }, {});

  const css = glob.sync(paths.cssSourceEntries).reduce((acc, uri) => {
    const entry = path.parse(uri).name;
    /**
     * Here we start building our object by placing the "entry" variable from
     * the previous line as a key and the entire path including the file name
     * as the value
     */
    acc[`${entry}.style`] = uri;
    return acc;
  }, {});

  const files = Object.assign({}, js, css);

  return files;
};

function aa() {
  const paths = require('./paths');
  const path = require('path');

  const js = paths.jsSourceEntries.reduce((acc, uri) => {
    const entry = path.parse(uri).name;
    console.log('uri' , uri);
    console.log('ENTRY' , entry);
    /**
     * Here we start building our object by placing the "entry" variable from
     * the previous line as a key and the entire path including the file name
     * as the value
     */
    acc[entry] = uri;
    return acc;
  }, {});

  const css = paths.cssSourceEntries.reduce((acc, uri) => {
    const entry = path.parse(uri).name;
    /**
     * Here we start building our object by placing the "entry" variable from
     * the previous line as a key and the entire path including the file name
     * as the value
     */
    acc[`${entry}.style`] = uri;
    return acc;
  }, {});
}
//console.log(aa())
module.exports = {
  getEntries,
};
