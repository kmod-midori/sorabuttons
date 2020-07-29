// ==UserScript==
// @name         Bilibili Timestamp
// @version      0.1
// @description  try to take over the world!
// @author       Harry Cheng <chengyuhui1#gmail.com>
// @match        https://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function() {
  "use strict";

  document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === "A") {
      alert(
        document.querySelector(".bilibili-player-video > video").currentTime
      );
    }
  });
})();
