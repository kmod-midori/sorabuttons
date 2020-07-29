<template>
  <div class="home">
    <div id="controls">
      <div class="control"><button @click="pauseAll">全部停止</button></div>
      <div class="control">
        <input v-model="repeat" type="checkbox" id="repeat" />
        <label for="repeat">洗脑循环</label>
      </div>
      <div class="control">
        <input v-model="multi" type="checkbox" id="multi" />
        <label for="repeat">同时播放</label>
      </div>
    </div>
    <div>
      <h2>Sorabuttons</h2>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=chengyuhui&repo=sorabuttons&type=star&count=true"
        frameborder="0"
        scrolling="0"
        width="100"
        height="20"
        title="GitHub"
      ></iframe>
      <a href="https://space.bilibili.com/402401719">
        <img src="https://img.shields.io/badge/Bilibili-402401719-blue" />
      </a>
    </div>

    <div class="audio-btn-wrapper" v-for="(item, i) in audioItems" :key="i">
      <button @click="play(item)">{{ item.label }}</button>
    </div>
  </div>
</template>

<script>
import { srcToFilename } from "../utils";
import { play, updateConfig, pauseAll } from "../player";

export default {
  name: "Home",
  data() {
    return {
      audioItems: [],
      multi: false,
      repeat: false,
    };
  },
  mounted() {
    this.loadList();
  },
  methods: {
    async loadList() {
      let res = await fetch("/audio.json");
      this.audioItems = await res.json();
    },
    play(item) {
      let srcUrl = "/audio/" + srcToFilename(item.src);
      play(srcUrl);
    },
    updateConfig() {
      updateConfig(this.repeat, this.multi);
    },
    pauseAll() {
      pauseAll();
    },
  },
  watch: {
    multi() {
      this.updateConfig();
    },
    repeat() {
      this.updateConfig();
    },
  },
};
</script>

<style lang="scss">
.home {
  margin: 1em;
  padding: 1em;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
}
button {
  border: 1px solid grey;
  border-radius: 6px;
}
.audio-btn-wrapper {
  display: inline-block;
  margin-right: 1em;
  button {
    padding: 1em;
  }
}

.control {
  display: inline-block;
  padding: 1em;
  button {
    padding: 0.5em;
  }
  label {
    margin-left: 1em;
  }
}
</style>
