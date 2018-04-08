/**
 * Подключение модуля FileSystem
 */
const fs = require('fs');
const options = {encoding: 'utf8'};

/**
 * Функция чтения директории
 * @param path
 * @returns {Promise<any>}
 */
const readDir = (path) => {

  return new Promise((done, fail) => {

    fs.readdir(path, options, (error, files) => {

      if (error) {

        fail(error);

      } else {

        done(files);

      }
    });

  });

};

/**
 * Функция чтения файла
 * @param path
 * @param file
 * @returns {Promise<any>}
 */
const readFile = (path, file) => {

  return new Promise((readFileDone, readFileFail) => {

    fs.readFile(path + file, options, (error, data) => {

      if (error) {

        readFileFail(error);

      } else {

        readFileDone({

          name: file,
          content: data

        });

      }

    });

  });

};


/**
 * Функция чтения директории и файлов в ней
 * @param dir
 * @returns {Promise<any>}
 */
const readAll = (path) => {

  return new Promise((done) => {

    readDir(path).then(files => Promise.all(files.map(file => readFile(path, file))).then(data => done(data)));

  });

};

/**
 * Экспорт функции
 * @type {function(*=)}
 */
module.exports = readAll;