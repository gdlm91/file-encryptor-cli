# File encryptor cli tool
a simple cli tool for encrypt and decrypt files
### Installation
```bash
npm i -g file-encryptor-cli
```
### Commands

```bash
file-encryptor encrypt <file> <password>

example:
file-encryptor encrypt ./config.js password -> output ./config.js.enc
```

params:
- file - path to file which will be encrypted (required)
- password - any secret password ;) (required)

```bash
file-encryptor decrypt [options] <file> <password> [dest]

example:
file-encryptor decrypt -f ./config.js.enc password -> output ./config.js
file-encryptor decrypt ./config.js.enc password ./decrypted.config.js -> output ./decrypted.config.js
```
options:
- -f --force - force replace destination file (optional)

params:
- file - path to file which will be decrypted (required)
- password - any secret password ;) (required)
- dest - destination file (optional) 

>note: use node version >= 8 (i have't test it at older versions)