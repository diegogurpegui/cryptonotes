const readline = require("readline");
const encryption = require("./modules/encryption")();

// get command line arguments
if (process.argv.length > 2) {
  // get command
  let command = process.argv[2];

  switch (command) {
    case "encrypt":
    case "decrypt":
      if (process.argv.length >= 4) {
        const content = process.argv[3];
        const encoding = process.argv[4];
        const outputEncoding = process.argv[5];

        askByTerminal("Enter password: ", true).then((password) => {
          if (password == "") {
            console.log("Password cannot be empty.");
            return;
          }

          if (command == "encrypt") {
            let encryptedContent = encryption.encrypt(
              content,
              password,
              undefined,
              encoding
            );
            console.log("Encrypted content:");
            console.log(encryptedContent);
          } else {
            let decryptedContent = encryption.decrypt(
              content,
              password,
              undefined,
              encoding,
              outputEncoding
            );
            console.log("Decrypted content:");
            console.log(decryptedContent);
          }
        });
      } else {
        // not enough parameters
        console.log("Some parameters are missing.");
      }
      break;
    default:
      console.log(`Command ${command} not recognized.`);
      break;
  }
}

function askByTerminal(query, hidden = false) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  if (hidden) {
    let t = true;
    rl._writeToOutput = (a) => {
      if (t) {
        rl.output.write(a);
        t = false;
      }
    };
  }
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      if (hidden) rl.output.write("\n\r");
      rl.close();
      resolve(ans);
    })
  );
}
