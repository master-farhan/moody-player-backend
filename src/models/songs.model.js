const mongoose = require("mongoose");

const songShema = new mongoose.Schema({
  title: String,
  artist: String,
  audio: String,
  mood: String,
});

const song = mongoose.model("song", songShema);

module.exports = song;
