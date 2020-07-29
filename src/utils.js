exports.srcToFilename = function(src) {
  let { url, start, duration } = src;
  let urlSegments = url.split("/");
  let videoId = urlSegments[urlSegments.length - 1];
  let filename = `${videoId}-${start}-${duration}.mp3`.replace(/:/g, "_");
  return filename;
};
