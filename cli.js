const encryption = require("./modules/encryption")();

// get command line arguments
if (process.argv.length > 2) {
  // get command
  let command = process.argv[2];

  switch (command) {
    case "encrypt":
    case "decrypt":
      if (process.argv.length >= 5) {
        const privateKey = process.argv[3];
        const content = process.argv[4];
        const encoding = process.argv[5];

        console.log("Password: " + privateKey);

        if (command == "encrypt") {
          let encryptedContent = encryption.encrypt(
            content,
            privateKey,
            undefined,
            encoding
          );
          console.log("Encrypted content:");
          console.log(encryptedContent);
        } else {
          let decryptedContent = encryption.decrypt(
            content,
            privateKey,
            undefined,
            encoding
          );
          console.log("Decrypted content:");
          console.log(decryptedContent);
        }
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
