let audios = {};
let playCount = 0;
let allowMulti = false;
let repeat = false;

export function play(url) {
  if (!allowMulti && playCount > 0) {
    return;
  }

  if (audios[url]) {
    audios[url].play();
    return;
  }

  const audio = new Audio();
  audio.preload = "auto";

  audios[url] = audio;
  audio.addEventListener("play", () => {
    playCount += 1;
  });
  audio.addEventListener("pause", () => {
    playCount -= 1;
  });
  audio.addEventListener("ended", () => {
    if (repeat) {
      audio.play();
    }
  });

  audio.src = url;
  audio.play();
  return audio;
}

export function pauseAll() {
  for (const audio of Object.values(audios)) {
    try {
      audio.pause();
    } catch (_) {
      // Ignore errors
    }
  }
}

export function updateConfig(iRepeat, iMulti) {
  repeat = iRepeat;
  allowMulti = iMulti;
}
