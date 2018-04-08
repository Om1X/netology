const fs = require('fs');

/**
 * Чтение файла
 * @param fileName
 * @returns {Promise<any>}
 */
const read = (fileName) => {

  return new Promise((done, fail) => {

    const config = {encoding: 'utf8'};
    fs.readFile(fileName, config, (error, content) => {

      if (error) {

        fail(error);

      } else {

        done(content);

      }

    });

  });

};

/**
 * Запись в файл
 * @param fileName
 * @param content
 * @returns {Promise<any>}
 */
const write = (fileName, content) => {

  return new Promise((done, fail) => {

    fs.writeFile(fileName, content, (error) => {

      if (error) {

        fail(error);

      } else {

        done(fileName);

      }

    });

  });

};

/**
 * Экспорт функций
 * @type {{read: function(*=), write: function(*=, *=)}}
 */
module.exports = {

  read,
  write

};