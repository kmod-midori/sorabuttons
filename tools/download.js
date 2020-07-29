const axios = require("axios").default;
const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");
const joinPath = require("path").join;
const audioList = require("../public/audio.json");
const { srcToFilename } = require("../src/utils");

const REFERER = "https://www.bilibili.com/";
const USER_AGENT =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36";

async function getVideoInfo(url) {
  const page_regex = /<script>window\.__playinfo__=(.+?)<\/script>/gm;

  var ret = await axios.get(url, {
    headers: {
      "User-Agent": USER_AGENT,
      Referer: REFERER,
    },
  });

  let page_str = ret.data;
  let page_match = page_regex.exec(page_str);
  return JSON.parse(page_match[1]);
}

function downloadAudio(url, start, duration, dest) {
  return new Promise((resolve, reject) => {
    ffmpeg(url)
      .inputOptions(
        `-user_agent`,
        USER_AGENT,
        `-headers`,
        `Referer: ${REFERER}`
      )
      .seekInput(start)
      .duration(duration)
      .audioBitrate("192k")
      .on("start", function(commandLine) {
        console.log("Spawned Ffmpeg with command: " + commandLine);
      })
      .on("progress", function(progress) {
        console.log(progress);
      })
      .on("error", function(err) {
        reject(err);
      })
      .on("end", function() {
        resolve();
      })
      .save(dest);
  });
}

async function download(item) {
  let { url, start, duration } = item;

  let filename = srcToFilename(item);
  let path = joinPath(__dirname, "../public/audio", filename);

  if (fs.existsSync(path)) {
    return path;
  }

  let videoInfo = await getVideoInfo(url);
  let audioUrl = videoInfo.data.dash.audio[0].baseUrl;

  await downloadAudio(audioUrl, start, duration, path);

  return path;
}

(async function() {
  for (const audioItem of audioList) {
    await download(audioItem.src);
  }
})();
