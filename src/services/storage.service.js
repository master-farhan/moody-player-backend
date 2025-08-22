const ImageKit = require("imagekit");
const mongoose = require("mongoose");

const imagekit = new ImageKit({
  publicKey: process.env.PUBLICKEY_URL,
  privateKey: process.env.PRIVATEKEY_URL,
  urlEndpoint: process.env.URL_ENDPOINT,
});

function uploadFile(file) {
  return new Promise((resolve, reject) => {
    imagekit.upload(
      {
        file: file.buffer, // from multer
        fileName: new mongoose.Types.ObjectId().toString(), // unique ID as filename
      },
      (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result)
      }
    );
  });
}

module.exports = uploadFile;
