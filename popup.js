document.addEventListener("DOMContentLoaded", function() {
    var playChance = 1;
    var soundFiles = ["sounds/albedo.0.mp3", "sounds/albedo.8.mp3","sounds/albedo.12.mp3","sounds/albedo.13.mp3","sounds/albedo.14.mp3","sounds/albedo.15.mp3","sounds/albedo.16.mp3","sounds/albedo.17.mp3","sounds/albedo.18.mp3","sounds/albedo.19.mp3","sounds/albedo.20.mp3","sounds/albedo.21.mp3","sounds/albedo.22.mp3","sounds/albedo.23.mp3","sounds/albedo.24.mp3","sounds/albedo.25.mp3","sounds/albedo.26.mp3","sounds/albedo.27.mp3","sounds/albedo.28.mp3","sounds/albedo.29.mp3","sounds/albedo.30.mp3","sounds/albedo.31.mp3","sounds/albedo.32.mp3","sounds/albedo.32.mp3",];
  
    document.addEventListener("click", function() {
      if (Math.random() < playChance) {
        var index = Math.floor(Math.random() * soundFiles.length);
        var audio = new Audio(chrome.runtime.getURL(soundFiles[index]));
        audio.play();
      }
    });
  });