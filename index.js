const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const crypto = require('crypto');
const program = require('commander');

const isFileExists = function (file) {
  try {
    fs.statSync(file);
  } catch (error) {
    return false;
  }
  return true;
};

const encryptFile = function (file, password) {
  const cipher = crypto.createCipher('aes-256-cbc', password);
  const input = fs.createReadStream(file);
  const outputFile = file + '.enc';
  const output = fs.createWriteStream(outputFile);
  input.pipe(cipher).pipe(output).on('finish', function() {
    input.close();
    output.close();
    console.log('output -> "' + outputFile + '".');
  });
};

const decryptFile = function (file, password, dest, force) {
  dest = dest || path.basename(file, '.enc');

  if (!force && isFileExists(dest)) {
    console.error('Destination file "' + dest + '" already exists.');
    return;
  }

  if (force && isFileExists(dest)) {
    fs.unlinkSync(dest);
  }

  const decipher = crypto.createDecipher('aes-256-cbc', password);

  decipher.on('error', function () {
    console.log('Invalid password.');
  });

  const input = fs.createReadStream(file);
  const output = fs.createWriteStream(dest);

  output.on('finish', function() {
    input.close();
    output.close();
    console.log('output -> "' + dest + '".');
  });

  input.pipe(decipher).pipe(output);
};

program
  .command('encrypt <file> <password>')
  .description('encrypt file')
  .action(function (file, password) {
    if (isFileExists(file)) {
      encryptFile(file, password);
    } else {
      console.error('File "' + path.resolve(__dirname, file) + '" not found.');
    }
  });

program
  .command('decrypt <file> <password> [dest]')
  .option('-f --force', 'force replace destination file')
  .description('decrypt file')
  .action(function (file, password, dest, options) {
    if (!_.endsWith(file, '.enc')) {
      console.error('File extension should be ".enc".');
      return;
    }
    if (isFileExists(file)) {
      decryptFile(file, password, dest, options.force);
    } else {
      console.error('File "' + path.resolve(__dirname, file) + '" not found.')
    }
  });

module.exports = program;
