# File encryptor cli tool
a simple cli tool for encrypt and decrypt files
### Installation
```
$ npm i -g file-encryptor-cli
```
### Commands
####encrypt
```bash
file-encryptor encrypt <file> <password>
```
params:
- file - path to file which will be encrypted (required)
- password - any secret password ;) (required)

####decrypt
```bash
file-encryptor decrypt [options] <file> <password> [dest]
```
options:
- -f --force - force replace destination file (optional)

params:
- file - path to file which will be decrypted (required)
- password - any secret password ;) (required)
- dest - destination file (optional) 
