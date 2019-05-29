# CryptoNotes
This is meant to be a super simple tool for encrypting and decrypting personal private notes.

## CLI (Command Line Interface)
The CLI is used through the `cli.js` file.
The CLI has no external reference to increase security.

### Using CLI
Here are the different commands

```
$ node cli encrypt <password> <content>
```

```
$ node cli decrypt <password> <content>
```

## Web tool
The web tool is a user friendly version.
For the moment, it is located under https://diegogurpegui.com/cryptonotes/
(WARNING: even if the encryption functions are able to run offline, the site uses 3rd party library in order to create a more rich user experience)
