const file = require('./modules/file-promise');

file
  .read('./data.txt')
  .then(data => data.toUpperCase())
  .then(data => file.write('./upper-data.txt', data))
  .then(fileName => console.log(`Создан файл ${fileName}`))
  .catch(err => console.error(err));