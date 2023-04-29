document.addEventListener("DOMContentLoaded", function() {

    var playChance = 1;
  
    document.addEventListener("click", function() {
      if (Math.random() < playChance) {
        var audio = new Audio(chrome.runtime.getURL("sounds/albedo.8.mp3"));
        audio.play();
      }
    });
  
  });