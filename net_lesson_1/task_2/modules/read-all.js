/**
 * Подключение модуля FileSystem
 */
const fs = require('fs');

/**
 * Функция чтения директории и файлов в ней
 * @param dir
 * @returns {Promise<any>}
 */
const readAll = (path) => {

    /**
     * Считываем дерикторию
     */
    return new Promise((done, fail) => {

        const options = {encoding: 'utf8'};
        fs.readdir(path, options, (error, files) => {

            if (error) {

                fail(error);

            } else {

                /**
                 * Запускаем параллельное чтение файлов
                 */
                Promise.all(

                    files.map((file) => {

                        return new Promise((readFileDone, readFileFail) => {

                            const filePath = path + file;
                            fs.readFile(filePath, options, (error, data) => {

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


                    })

                ).then(values => done(values));

            }

        });

    });

};

/**
 * Экспорт функции
 * @type {function(*=)}
 */
module.exports = readAll;