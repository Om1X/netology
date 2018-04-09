/**
 * Подключение модуля FileSystem
 */
const fs = require('fs');

const pathInfo = (path, callback) => {

  const options = {encoding: 'utf8'};
  fs.readdir(path, options, (error, files) => {

    if (error) {

      fs.readFile(path, options, (error, content) => {

        if (error) {

          callback(error, null);

        } else {

          callback(null, {

            path: path,
            type: 'file',
            content: content,
            childs: undefined

          });

        }

      });

    } else {

      callback(null, {

        path: path,
        type: 'directory',
        content: undefined,
        childs: files

      });

    }

  });

};

module.exports = pathInfo;