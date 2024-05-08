### Create .env file in root dir with params:
```
MNEMONIC
PROJECT_ID
```
MNEMONIC — phrase of wallet
PROJECT_ID — infura project id

### Execute in root dir
```
truffle develop
migrate --reset
token = Token.deployed();
migrate --reset --network blastSepolia 
```

