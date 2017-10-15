# File encryptor cli tool
a simple cli tool for encrypt and decrypt files
### Installation
```
$ npm i -g file-encryptor-cli
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
```
options:
- -f --force - force replace destination file (optional)

params:
- file - path to file which will be decrypted (required)
- password - any secret password ;) (required)
- dest - destination file (optional) 